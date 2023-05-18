import React from "react";

import CarParkingModal from "./CarParkingModal";

function PortSection({ data }) {
  const [filteredData, setFilteredData] = React.useState(data);

  const openModal = (type) => {
    const cars = data.filter(
      (car) => car.PRIORITY.toLowerCase() === type.toLowerCase()
    );

    setFilteredData(cars);
  };

  return (
    <>
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="px-4 mx-auto bg-white pt-6 border overflow-hidden border-black rounded-md shadow-dashboard">
            <h3 className="mb-12 text-3xl md:text-3xl leading-tight font-bold tracking-tighter text-center">
              Virtual Port
            </h3>
          </div>
        </div>
        {/* <img
          src="src/assets/picture.jpg"
          useMap="#image-map"
          className="object-cover w-full h-full"
        /> */}
        {/* <VirtualPort isLoaded={isLoaded} /> */}
        <map name="image-map">
          <area
            alt="Parking 1"
            title="Parking 1"
            href="#!"
            coords="628,477,531,403"
            shape="rect"
            data-drawer-target="drawer-top-example-1"
            data-drawer-show="drawer-top-example-1"
            data-drawer-placement="top"
            aria-controls="drawer-top-example-1"
            onClick={() => {
              openModal("normal");
            }}
          />
          <area
            alt="Parking 1"
            title="Parking 1"
            href="#!"
            coords="811,429,716,367"
            shape="rect"
            data-drawer-target="drawer-top-example-1"
            data-drawer-show="drawer-top-example-1"
            data-drawer-placement="top"
            aria-controls="drawer-top-example-1"
            onClick={() => {
              openModal("vip");
            }}
          />
          <area
            alt="Parking 1"
            title="Parking 1"
            href="#!"
            coords="1014,339,906,404"
            shape="rect"
            data-drawer-target="drawer-top-example-1"
            data-drawer-show="drawer-top-example-1"
            data-drawer-placement="top"
            aria-controls="drawer-top-example-1"
            onClick={() => {
              openModal("normal");
            }}
          />
          <area
            alt="Parking 1"
            title="Parking 1"
            href="#!"
            coords="1386,475,1509,560"
            shape="rect"
            data-drawer-target="drawer-top-example-1"
            data-drawer-show="drawer-top-example-1"
            data-drawer-placement="top"
            aria-controls="drawer-top-example-1"
            onClick={() => {
              openModal("vip");
            }}
          />
        </map>
      </section>
      <CarParkingModal filteredData={filteredData} />
    </>
  );
}

export default PortSection;
