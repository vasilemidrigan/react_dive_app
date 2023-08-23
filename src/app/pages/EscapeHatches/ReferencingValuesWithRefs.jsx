import { useRef } from "react";

export default function ReferencingValuesWithRefs() {
  const ref = useRef(0);

  console.log(ref);
  console.log(ref.current);

  function handleClick() {
    ref.current += 1;

    console.log(ref.current);
  }
  return (
    <div className="wrapper">
      <h1>Referencing Values with Refs</h1>

      <b>
        When we want a component to remember some information, but we don't want
        it to trigger a new render, we can use a ref.
      </b>

      <p>ref is like your secret pocket that React doesn't track.</p>

      <p>
        When a piece of information is used for rendering, use state, when it
        doesn't require a re-render, using ref can be more efficient.
      </p>

      <p>
        ref is mutable, we can change it, update outside of the rendeirng
        process.
      </p>

      <p>
        refs are an escape hatch, use it when working with external systems, or
        browser API's.
      </p>

      <button onClick={handleClick}>increment</button>
    </div>
  );
}
