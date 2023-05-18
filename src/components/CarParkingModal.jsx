import Algorithm from "./algorithm/Algorithm";

const rows = [1, 2, 3];
function CarParkingModal({ filteredData }) {
  console.log(filteredData, "ttttttttttttttttttttttttttttl");

  const renderBoxes = () => {
    let html;

    while (filteredData.length) {
      console.log(filteredData.splice(0, 2), "ccccccccccccccccccccccc");
    }
  };

  const newRows = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    newRows.push(
      <div key={i} className="flex flex-wrap justify-center -mx-4">
        <div className="h-32 border-4 border-indigo-500/100 w-1/2 md:w-1/3 lg:w-1/6 px-8 mb-16 lg:mb-0 hover:border-blue-400 relative overflow-hidden">
          {filteredData[i]?.ID && (
            <>
              <img
                className="mx-auto"
                src="src/assets/car.svg"
                alt=""
                contentEditable="false"
              />
              <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">
                {filteredData[i]?.ID}
              </div>
            </>
          )}
        </div>
        <div className="h-32 border-4 border-indigo-500/100 w-1/2 md:w-1/3 lg:w-1/6 px-8 mb-16 lg:mb-0 hover:border-blue-400 relative overflow-hidden">
          {filteredData[i + 1]?.ID && (
            <>
              <img
                className="mx-auto"
                src="src/assets/car.svg"
                alt=""
                contentEditable="false"
              />
              <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">
                {filteredData[i + 1]?.ID}
              </div>
            </>
          )}
        </div>
        <div className="h-32 border-4 border-indigo-500/100 w-1/2 md:w-1/3 lg:w-1/6 px-8 mb-16 lg:mb-0 hover:border-blue-400 relative overflow-hidden">
          {filteredData[i + 2]?.ID && (
            <>
              <img
                className="mx-auto"
                src="src/assets/car.svg"
                alt=""
                contentEditable="false"
              />
              <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">
                {filteredData[i + 2]?.ID}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      id="drawer-top-example-1"
      className="fixed top-0 left-0 right-0 z-40 w-full p-4 transition-transform -translate-y-full bg-white dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-top-label"
    >
      {" "}
      <h2>Optimize</h2>
      <h5
        id="drawer-top-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        {filteredData?.length > 0 && filteredData[0]?.PRIORITY}
      </h5>
      {filteredData?.length > 0 && (
        <div className="container px-4 mx-auto">
          <div className="px-4 mx-auto bg-white pt-6 border overflow-hidden border-black rounded-md shadow-dashboard h-screen">
            <h3 className="mb-12 text-3xl md:text-3xl leading-tight font-bold tracking-tighter text-center">
              Finalized parking allocation
            </h3>
            <Algorithm data={filteredData} />
            <div className="">{newRows}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarParkingModal;
