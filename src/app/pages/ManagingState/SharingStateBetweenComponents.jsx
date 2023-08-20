import { useState } from "react";

export default function SharingStateBetweenComponents() {
  return (
    <div className="wrapper">
      <h1> Sharing State between Components</h1>

      <p>
        If you want your components to always change together, you can lift
        state up, which basically means pass the state from your components to
        their closest parent, and then pass it down to them via props.
      </p>
      <b>A single source of truth</b>
      <p>
        The principle means that we have one place that handles the information
        we receive via props, so we have a common parent for two or more com-
        ponents, and through props wich we receive we get a single source of
        truth, we get a information wich is true for all other components that
        share the common parent with that specific piece of information.
      </p>

      {/* 1 */}

      <Parent />
    </div>
  );
}

// 1

function Parent() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="wrapper">
      <Child isActive={isActive === 0} onTouch={() => setIsActive(0)} />
      <Child isActive={isActive === 1} onTouch={() => setIsActive(1)} />
    </div>
  );
}

function Child({ isActive, onTouch }) {
  return (
    <div
      style={{
        backgroundColor: `${isActive ? "yellow" : "purple"}`,
        width: "50px",
        height: "50px",
        margin: "2px",
      }}
      onClick={onTouch}
    ></div>
  );
}
