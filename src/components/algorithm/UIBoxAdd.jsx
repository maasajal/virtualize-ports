const UIBoxAdd = (props) => {
  let w = props.defaultWidth,
    h = props.defaultHeight,
    id = props.defaultId,
    prt = props.priority,
    b = 0;
  return (
    <div className="uiboxadd-btn">
      <button onClick={() => props.onAdd(w, h, id, prt, b)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Space Optimize</button>
    </div>
  );
};

export default UIBoxAdd;
