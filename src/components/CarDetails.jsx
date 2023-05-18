const CarDetails = ({ data }) => {
  return (
    <>
      {data.length > 0 && (
        <section className="bg-coolGray-50 py-4">
          <div className="container px-4 mx-auto">
            <div className="pt-6 bg-white overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
              <h2
                className="px-6 mb-4 text-lg text-coolGray-900 font-semibold"
                data-gramm="false"
                wt-ignore-input="true"
                data-quillbot-element="dPcoYR_rW__W2QAu9uNdj"
              >
                Total Cars in Deck are {data?.length}
              </h2>

              <div className="px-6 overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80">
                      {data?.length > 0 &&
                        Object.keys(data[0])?.map((col, idx) => (
                          <th
                            key={idx}
                            className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center"
                          >
                            <p>{col}</p>
                          </th>
                        ))}
                    </tr>
                    {data.map((car) => (
                      <tr
                        key={car.ID}
                        className="h-18 border-b border-coolGray-100"
                      >
                        <th className="whitespace-nowrap px-4 bg-white text-left">
                          <div className="flex items-center -m-2">
                            <div className="w-auto p-2">
                              <div className="flex items-center justify-center w-10 h-10 text-base font-medium rounded-md bg-blue-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 256 256"
                                  xmlSpace="preserve"
                                  className=""
                                >
                                  <defs />
                                  <g
                                    style={{
                                      stroke: "none",
                                      strokeWidth: 0,
                                      strokeDasharray: "none",
                                      strokeLinecap: "butt",
                                      strokeLinejoin: "miter",
                                      strokeMiterlimit: 10,
                                      fill: "none",
                                      fillRule: "nonzero",
                                      opacity: 1,
                                    }}
                                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                  >
                                    <circle
                                      cx="70.735"
                                      cy="56.775"
                                      r="1.955"
                                      style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(0, 0, 0)",
                                        fillRule: "nonzero",
                                        opacity: 1,
                                      }}
                                      transform="  matrix(1 0 0 1 0 0) "
                                    />
                                    <circle
                                      cx="19.765"
                                      cy="56.775"
                                      r="1.955"
                                      style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "rgb(0, 0, 0)",
                                        fillRule: "nonzero",
                                        opacity: 1,
                                      }}
                                      transform="  matrix(1 0 0 1 0 0) "
                                    />
                                    <path
                                      d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z"
                                      style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "#ebf3fe",
                                        fillRule: "nonzero",
                                        opacity: 1,
                                      }}
                                      transform=" matrix(1 0 0 1 0 0) "
                                      strokeLinecap="round"
                                      fill="#EBF3FE"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="w-auto p-2">
                              <p className="text-sm font-medium text-coolGray-800">
                                {car.ID}
                              </p>
                            </div>
                          </div>
                        </th>
                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                          {car.LENGTH}
                        </th>
                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                          {car.WIDTH}
                        </th>
                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                          {car.PRIORITY}
                        </th>
                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-center text-blue-700">
                          {car.NAME}
                        </th>
                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-center text-blue-700">
                          {car.MAKE}
                        </th>
                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-center text-blue-700">
                          {car.TEL}
                        </th>
                        <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-center text-blue-700">
                          {car.COLOR}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CarDetails;
