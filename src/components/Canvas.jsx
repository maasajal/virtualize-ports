import React, { useEffect } from "react";
import carImg from "../assets/images/car-verticals.png";

const CanvasWithImages = () => {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("scream");
    const bw = 5;

    const rectangles = [
      {
        x: 0,
        y: 0,
        width: 160,
        height: 410,
        borderWidth: bw,
        borderColor: "red",
        carID: " Car 1 ",
      },
      {
        x: 0,
        y: 410 + bw,
        width: 165,
        height: 380,
        borderWidth: bw,
        borderColor: "blue",
        carID: " Car 2 ",
      },
      {
        x: 160 + bw,
        y: 0,
        width: 170,
        height: 390,
        borderWidth: bw,
        borderColor: "green",
        carID: " Car 3 ",
      },
      {
        x: 335 + bw,
        y: 0,
        width: 170,
        height: 390,
        borderWidth: bw,
        borderColor: "yellow",
        carID: "Car 4",
      },
      {
        x: 165 + bw,
        y: 390 + bw,
        width: 170,
        height: 390,
        borderWidth: bw,
        borderColor: "skyblue",
        carID: "Car 5",
      },
      {
        x: 340 + bw,
        y: 390 + bw,
        width: 170,
        height: 390,
        borderWidth: bw,
        borderColor: "green",
        carID: "Car 6",
      },
    ];

    rectangles.forEach((rectangle) => {
      ctx.drawImage(
        img,
        rectangle.x + 10,
        rectangle.y + 10,
        rectangle.width - 10,
        rectangle.height - 10
      );
      ctx.strokeStyle = rectangle.borderColor;
      ctx.lineWidth = rectangle.borderWidth;
      ctx.strokeRect(
        rectangle.x,
        rectangle.y,
        rectangle.width,
        rectangle.height
      );
      ctx.fillStyle = "black";
      ctx.font = "12px Arial";
      ctx.fillText(rectangle.carID, rectangle.x + 5, rectangle.y + 15);
    });
  }, []);

  return (
    <div>
      <img
        id="scream"
        width="100"
        height="100%"
        src={carImg}
        alt="The Scream"
      />

      <p>Canvas</p>
      <canvas
        id="myCanvas"
        width="520"
        height="800"
        style={{ border: "2px solid #ff0000" }}
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  );
};

export default CanvasWithImages;
