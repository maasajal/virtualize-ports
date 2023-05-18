const UIBin = (props) => {
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className="mb-6">
          <label
            for="width"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Width:
          </label>
          <input
            id="width"
            type="number"
            value={props.width}
            onChange={(e) =>
              props.onChange(Number(e.target.value), props.height)
            }
            required
            className="inputStyles bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />{" "}
        </div>
        <div className="mb-6">
          <label
            for="lenght"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Length:
          </label>
          <input
            id="lenght"
            type="number"
            value={props.height}
            onChange={(e) =>
              props.onChange(props.width, Number(e.target.value))
            }
            required
            className="inputStyles bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </form>
  );
};
export default UIBin;
