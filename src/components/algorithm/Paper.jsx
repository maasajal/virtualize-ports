const Paper = (props) => {
  return (
    <>
      <svg width={props.width} height={props.height} className="svg">
        {props.children}
      </svg>
    </>
  );
};

export default Paper;
