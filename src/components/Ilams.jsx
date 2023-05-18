import React, { useState } from "react";
import Papa from "papaparse";

import TopSection from "./TopSection";
import CarDetails from "./CarDetails";
import VirtualPort from "./VirtualPort";

import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "../components/MapConf";
import PortSection from "./PortSection";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const Ilams = () => {
    const { isLoaded } = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey: mapOptions.googleMapApiKey,
      });
  // This state will store the parsed data
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };

  const requiredFields = [
    "ID",
    "LENGTH",
    "WIDTH",
    "PRIORITY",
    "NAME",
    "MAKE",
    "TEL",
    "COLOR",
  ];

  // Validate the CSV file inputs
  const validateCsvData = (csvData) => {
    const errors = [];

    const idRegex = /^[a-zA-Z]{3}-\d{3}$/; // Matches format of "abc-123"
    const uniqueIds = new Set();

    // Iterate through each row of the CSV data
    csvData.forEach((row, rowIndex) => {
      // Check for required fields
      const missingFields = requiredFields.filter((field) => !row[field]);
      if (missingFields.length) {
        const missingColumns = missingFields.map(
          (field) => requiredFields.indexOf(field) + 1
        );
        errors.push(
          `Missing required fields in Row ${
            rowIndex + 1
          }: columns ${missingColumns.join(", ")}`
        );
      }
      // Validate unique IDs
      if (!idRegex.test(row.ID)) {
        errors.push(
          `Invalid ID format in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("ID") + 1
          }: ID should be like abc-123.`
        );
      } else if (uniqueIds.has(row.ID)) {
        errors.push(
          `Duplicate ID in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("ID") + 1
          }: ID must be unique.`
        );
      } else {
        uniqueIds.add(row.ID);
      }

      // Validate data types and field lengths
      if (typeof row.LENGTH === "number") {
        errors.push(
          `Invalid in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("LENGTH") + 1
          }: length value.`
        );
      }
      // Validate data types and field widths
      if (typeof row.WIDTH === "number") {
        errors.push(
          `Invalid in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("WIDTH") + 1
          }: width value.`
        );
      }
      // Validate data types and field priority
      if (row.PRIORITY === " ") {
        errors.push(
          `Invalid in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("PRIORITY") + 1
          }: priority value.`
        );
      }
      // Validate data types and field name
      if (row.NAME === " ") {
        errors.push(
          `Invalid in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("NAME") + 1
          }: name value.`
        );
      }
      // Validate data types and field make
      if (row.MAKE === " ") {
        errors.push(
          `Invalid in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("MAKE") + 1
          }: make value.`
        );
      }

      // Validate regular expressions
      const telRegex = /^\d{10}$/;
      if (!telRegex.test(row.TEL)) {
        errors.push(
          `Invalid in Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("TEL") + 1
          }: phone number must be 10 digit.`
        );
      }
      // Validate data types and field color
      if (row.COLOR === " ") {
        errors.push(
          `Row ${rowIndex + 1}, Column ${
            Object.keys(row).indexOf("COLOR") + 1
          }: Invalid color value`
        );
      }
    });

    return errors;
  };

  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);

      const validationErrors = validateCsvData(parsedData);
      if (validationErrors.length) {
        setError(validationErrors.join("\n"));
      } else {
        setData(parsedData);
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <TopSection
        data={data}
        file={file}
        error={error}
        handleFileChange={handleFileChange}
        handleParse={handleParse}
      />
      <CarDetails data={data} />
      <hr />
      <PortSection data={data} />
      <VirtualPort isLoaded={isLoaded} data={data} />
    </>
  );
};

export default Ilams;
