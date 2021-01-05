import { css, cx } from "@emotion/css";
import { colours } from "./constants";

function App() {
  return (
    <div
      className={css`
        background: ${colours.green};
        min-height: 100vh;
        display: flex;
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <h1
          className={css`
            font-family: "Playfair Display", serif;
            color: white;
            size: 35px;
            font-weight: 700;
          `}
        >
          {" "}
          Grologue{" "}
        </h1>
      </div>
    </div>
  );
}

export default App;
