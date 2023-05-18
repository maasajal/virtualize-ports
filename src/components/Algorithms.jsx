import "./demo.css";

const Algorithm = () => {
  return (
    <>
      <div id="settings">
        <div class="examples">
          <label for="examples">Examples: </label>
          <select id="examples">
            <option value="simple">simple</option>
            <option value="square">square</option>
            <option value="tall">tall</option>
            <option value="wide">wide</option>
            <option value="tallwide">tall and wide</option>
            <option value="power2">powers of 2</option>
            <option value="oddeven">odd and even</option>
            <option value="complex">complex</option>
          </select>
        </div>

        <div class="blocks">
          <label for="blocks">
            Blocks:
            <span class="example">
              <b>W</b>x<b>H</b>[x<b>N</b>]
            </span>
          </label>
          <textarea id="blocks" rows="12"></textarea>
        </div>

        <div class="size">
          <label for="size">size: </label>
          <select id="size">
            <option selected>832x810</option>
            <option>810x840</option>
            <option>500x500</option>
            <option>800x600</option>
            <option>automatic</option>
          </select>
        </div>

        <div class="sort">
          <label for="sort">sort: </label>
          <select id="sort">
            <option>none</option>
            <option>width</option>
            <option>height</option>
            <option selected>maxside</option>
            <option>area</option>
            <option>random</option>
          </select>
        </div>

        <div class="color">
          <label for="color">color: </label>
          <select id="color">
            <option>pastel</option>
            <option>basic</option>
            <option>gray</option>
            <option>vintage</option>
            <option>solarized</option>
            <option>none</option>
          </select>
        </div>

        <div class="ratio">
          Filled: <span id="ratio">0</span>%
        </div>

        <div id="nofit" class="nofit"></div>
      </div>{" "}
      <br />
    </>
  );
};

export default Algorithm;
