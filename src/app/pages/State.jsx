import { useState } from "react";

export default function State() {
  // 1
  let num = 1;

  function incrementNum() {
    num += 1;
    console.log(num);
  }
  // 2
  const [number, setNumber] = useState(1);
  // 4
  let message = "Hi all!";

  function handleNumber() {
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <div className="wrapper">
      <h1>State: A component's Memory</h1>

      <p>
        A component-specific memory is called state. When we for example need to
        remember the current input value, the current counter value, or the
        image in the carrousel, etc.
      </p>

      <hr />

      <b>
        (1) Using simple variables for React components doesn't work for two
        reasons:
      </b>
      <p>
        1. Local variables do not persist between renders, so after the render,
        the variable has its initial value.{" "}
      </p>
      <p>2. Changes to local variables do not trigger renders.</p>

      <hr />

      <b>To update a component with new data, two things need to happen:</b>
      <p>1. Retain the data between renders.</p>
      <p>
        2. Trigger React to render the component with new data(re-rendering)
      </p>

      <hr />

      <p>
        (2) useState provides those two things: a state variable to retain data
        between renders, and a state setter function to update and trigger React
        to render the component again.
      </p>

      <hr />

      <p>
        Hooks are special React functions that are only available while React is
        rendering, they let you hook into different React features, state is
        just one of those features.
      </p>

      <p>
        Hooks-functions starting with 'use' can only be called at the top level
        of your component or your own hooks, it can't be called inside
        conditions, loops, or other nested functions. They are kind of
        unconditional decalarations of your component needs.
      </p>

      <p>
        So when we call useState, we're telling React that we want this
        component to remember something between renders.
      </p>

      <hr />

      <p>How useState works:</p>
      <p>
        1. Component renders the first time if you passed the initial value:
        [nr, setNr] = useState(0) for example, it will return [0, setNr].
      </p>
      <p>
        2. By click (for ex.) you update the state: it calls setNr(nr + 1), nr
        is 0, so it's setNr(1), so React remember nr is 1 and trigger another
        render.
      </p>
      <p>
        3. React still sees useState(0), but because React remembers that you
        set nr to 1, it returns [1, setNr], and so on.
      </p>

      <hr />

      <p>
        (3) state is local to a component, if we render the same component twice
        or more, each copy will have completely isolated state.
      </p>
      <p>
        A state is completely private to the component in which it is declared,
        a parent can't change the state of the child component.
      </p>

      <hr />

      <p>
        (4) ! In cases where we don't need to persist the value between renders,
        we should use regular variables. For example in single events, where we
        don't need to remember the value.
      </p>

      {/* 1 */}

      <span>num variable is: {num}</span>
      <button onClick={incrementNum}>increment num</button>

      {/* 2 */}
      <br />

      <span>num variable is: {number}</span>
      <button onClick={handleNumber}>increment num</button>

      {/* 3 */}

      <hr />

      <Child />
      <Child />

      {/* 4 */}
      <button onClick={() => console.log(message)}>greet all</button>
    </div>
  );
}

// 3
function Child() {
  const [value, setValue] = useState(0);

  function incrementValue() {
    setValue(value + 1);
  }

  return <button onClick={incrementValue}>value: {value}</button>;
}
