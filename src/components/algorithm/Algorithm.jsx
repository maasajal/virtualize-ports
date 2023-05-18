import React from "react";
import { BP2D } from "binpackingjs";

// Customs components based on algorithm
import Paper from "./Paper";
import Rect from "./Rect";
import UIBin from "./UIBin";
import UIBoxAdd from "./UIBoxAdd";

const { Bin, Box, Packer, heuristics } = BP2D;

class Algorithm extends React.Component {
  unpackedBoxes = [];

  constructor(props) {
    super(props);
    this.state = {
      heuristic: "BestAreaFit",
      paper: { width: "100%", height: "100vh" },
      bins: [[800, 300]], // Set the default Deck dimension. [width, height]
      boxes: [],
      data: this.props.data,
    };
  }

  getBins() {
    return this.state.bins.map(([width, height], index) => {
      // let deckDim = width * height; // Calculate deck dimension.
      return (
        <div>
          <UIBin
            key={"bin-" + index}
            width={width}
            height={height}
            onChange={(w, h) => {
              this.state.bins[index] = [w, h];
              this.setState({ bins: this.state.bins });
            }}
          />
          {/* <hr /> */}
          {/* <strong>Deck Dimension: {deckDim} </strong> */}
        </div>
      );
    });
  }

  visualize() {
    let { bins, boxes, heuristic, paper } = this.state;
    let algo, paperPacker, packer, boxesOfBins;

    // buggg
    if (heuristics[heuristic]) {
      algo = new heuristics[heuristic]();
    }

    // pack bins to paper
    boxesOfBins = bins.map((b) => new Box(b[0], b[1]));
    paperPacker = new Packer([new Bin(paper.width, paper.height)]);
    paperPacker.pack(boxesOfBins);

    // pack boxes to bins
    packer = new Packer(bins.map((b) => new Bin(b[0], b[1], algo)));
    packer.pack(
      boxes.map((b) => {
        const newBox = new Box(b[0], b[1]);
        return { ...newBox, carID: b[2], priority: b[3] };
      })
    );

    this.unpackedBoxes = packer.unpackedBoxes;

    return packer.bins.map((bin, binId) => {
      let out = [
        <Rect
          width={bin.width}
          height={bin.height}
          x={boxesOfBins[binId].x}
          y={boxesOfBins[binId].y}
          style={{ stroke: "#000", strokeWidth: 1, fill: "#fff" }}
        />,
      ];
      if (bin.boxes.length > 0) {
        out = out.concat(
          bin.boxes.map((box, boxId) => {
            // console.log(bin.boxes);

            let color = "skyblue",
              img = "src/assets/images/carPark.png";

            // if (box.width > box.height) {
            //   img = "car.png";
            // } else {
            //   img = "car-verticals.png";
            // }

            return (
              <>
                <Rect
                  width={box.width}
                  height={box.height}
                  x={box.x}
                  y={box.y}
                  transform={`translate(${boxesOfBins[binId].x} ${boxesOfBins[binId].y})`}
                  style={{
                    fill: `${color}`,
                    fillOpacity: 0.5,
                    stroke: "black",
                    strokeWidth: 3,
                  }}
                  carid={box.carID}
                  img={img}
                />
              </>
            );
          })
        );
      }
      return out;
    });
  }

  render() {
    return (
      <div>
        <div>
          <div className="input-data">
            <h3 className="text-2xl font-extrabold dark:text-white">
              Customize your Deck Dimension
            </h3>
            {this.getBins()}
            <div>
              <UIBoxAdd
                defaultWidth={this.state.data.map((d) => d.WIDTH)} // Vehicle Wide range in cm
                defaultHeight={this.state.data.map((d) => d.LENGTH)} // Vehicle Length range in cm
                defaultId={this.state.data.map((d) => d.ID)} // Vehicle ID
                priority={this.state.data.map((d) => d.PRIORITY)} // Priority based Vehicle
                bins={this.state.bins}
                onAdd={(w, h, id, prt, b) => {
                  let { boxes } = this.state;
                  this.state.data.map(
                    (d) => (
                      (w = d.WIDTH),
                      (h = d.LENGTH),
                      (id = d.ID),
                      (prt = d.PRIORITY),
                      boxes.push([d.WIDTH, d.LENGTH, d.ID, d.PRIORITY, b]),
                      this.setState({ boxes })
                    )
                  );
                  console.log({ boxes });
                }}
              />
            </div>
            <br />
            <h3>Vehicles ({this.state.boxes.length})</h3>
          </div>
        </div>
        <div>
          <div>
            <label
              for="heuristics"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <strong>Heuristics: </strong>
            </label>

            <select
              id="heuristics"
              value={this.state.heuristic}
              onChange={(event) =>
                this.setState({ heuristic: event.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="BestAreaFit">BestAreaFit</option>
              <option value="BestLongSideFit">BestLongSideFit</option>
              <option value="BestShortSideFit">BestShortSideFit</option>
              <option value="BottomLeft">BottomLeft</option>
            </select>
            <hr />
            <div className="parking">
              <Paper
                width={this.state.paper.width}
                height={this.state.paper.height}
              >
                {this.visualize()}
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Algorithm;
