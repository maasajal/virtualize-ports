import Ilams_logo from "../assets/images/ilams-logo.png";

function TopSection({
  data,
  file,
  error,
  settingFile,
  handleFileChange,
  handleParse,
}) {
  console.log("dddddddddddddd", data);
  return (
    <section className="py-4 bg-coolGray-50">
      <div className="container px-4 mx-auto">
        <div className="h-full overflow-hidden bg-white rounded-md">
          <nav className="flex justify-between p-6 px-4 bg-coolGray-100">
            <a href="#">
              <img className="h-8" src={Ilams_logo} alt="Logo" />
            </a>
            <div className="hidden xl:flex items-center"></div>
            <button className="navbar-burger self-center xl:hidden">
              <svg
                width="35"
                height="35"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-coolGray-50"
                  width="32"
                  height="32"
                  rx="6"
                  fill="currentColor"
                ></rect>
                <path
                  className="text-coolGray-500"
                  d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </nav>
          <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
            <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
              <nav className="relative p-6 h-full overflow-y-auto">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <a className="inline-block mb-6" href="#">
                      <img className="h-8" src={Ilams_logo} alt="logo" />
                    </a>
                    <ul className="mb-6">
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                    fill="#556987"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {error && (
            <div
              id="alert-2"
              className="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div className="ml-3 text-sm font-medium">{error}</div>
            </div>
          )}

          <div className="py-6 border-coolGray-100">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full md:w-1/3 p-3"></div>

                <div className="w-full md:flex-1 p-3 mb-16 mt-24">
                  <h3 className="mb-4 text-4xl md:text-3xl leading-tight font-bold tracking-tighter text-center">
                    Deck Dimensions Input
                  </h3>
                  <p className="mb-8 text-lg md:text-x text-coolGray-500 font-medium text-center">
                    Input your passenger details as csv, excel or other format.
                  </p>
                  <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-green-500 focus-within:border-green-500 border border-dashed border-coolGray-200 rounded-lg">
                    <svg
                      className="mb-1.5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.71 7.71L11 5.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V5.41L15.29 7.71C15.383 7.80373 15.4936 7.87813 15.6154 7.92889C15.7373 7.97966 15.868 8.0058 16 8.0058C16.132 8.0058 16.2627 7.97966 16.3846 7.92889C16.5064 7.87813 16.617 7.80373 16.71 7.71C16.8037 7.61704 16.8781 7.50644 16.9289 7.38458C16.9797 7.26272 17.0058 7.13202 17.0058 7C17.0058 6.86799 16.9797 6.73729 16.9289 6.61543C16.8781 6.49357 16.8037 6.38297 16.71 6.29L12.71 2.29C12.6149 2.19896 12.5028 2.1276 12.38 2.08C12.1365 1.97999 11.8635 1.97999 11.62 2.08C11.4972 2.1276 11.3851 2.19896 11.29 2.29L7.29 6.29C7.19676 6.38324 7.1228 6.49393 7.07234 6.61575C7.02188 6.73758 6.99591 6.86814 6.99591 7C6.99591 7.13186 7.02188 7.26243 7.07234 7.38425C7.1228 7.50607 7.19676 7.61677 7.29 7.71C7.38324 7.80324 7.49393 7.8772 7.61575 7.92766C7.73757 7.97812 7.86814 8.00409 8 8.00409C8.13186 8.00409 8.26243 7.97812 8.38425 7.92766C8.50607 7.8772 8.61676 7.80324 8.71 7.71ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 3.89464 12.4804 3.70711 12.2929C3.51957 12.1054 3.26522 12 3 12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p className="mb-1 text-sm text-coolGray-800 font-medium">
                      <span className="text-blue-700">
                        Click to Upload a file
                      </span>
                      <span> or drag and drop</span>
                    </p>
                    <p className="text-xs text-coolGray-500 font-medium">
                      csv, xlx and xlsxs file up to 10MB
                    </p>
                    <input
                      className="absolute top-0 left-0 w-full h-full opacity-0"
                      type="file"
                      id="csvInput"
                      name="file"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="w-full md:w-auto p-1.5">
                    <button
                      className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-white border rounded-md shadow-button bg-blue-700 border-blue-700 hover:bg-blue-900"
                      onClick={handleParse}
                    >
                      <p>Upload</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
