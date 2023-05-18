// const Rect = (props = {}) => <rect {...props} />;
const Rect = (props = {}) => (
  <>
    <rect {...props} />
    <image {...props} href={props.img} className="mx-auto" />
    <text {...props} dx={"1%"} dy={"2%"}>
      P
    </text>
    <text
      {...props}
      dx={"2%"}
      dy={"2%"}
      style={{ fill: "#000", fillOpacity: 1 }}
    >
      {props.carid}
    </text>
  </>
);

export default Rect;
