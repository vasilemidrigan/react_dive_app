import { useState } from "react";

export default function StateAsASnapshot() {
  // 1
  const [nr, setNr] = useState(0);

  function updateNr() {
    setNr(nr + 1);
    setNr(nr + 1);
  }

  // 2
  function logNr() {
    setNr(nr + 1);
    console.log(nr);
  }

  // 3
  function logScheduledNr() {
    setNr(nr + 1);

    setTimeout(() => {
      console.log(nr);
    }, 2000);
  }

  return (
    <div className="wrapper">
      <h1>State as a Snapshot</h1>

      <p>
        Though states look like variables, that you can read and write from,
        they actually are more like a snapshot, setting it doesn't change the
        state variable, but instead it triggers a re-render.
      </p>

      <hr />

      <b>Setting states triggers renders</b>
      <p>
        Event though it seems like the user interface is changing in response to
        the user event like a click, it is really like that.
      </p>
      <p>What is happening when we click a button for ex:</p>
      <ol>
        <li>The onSubmit event handler executes</li>
        <li>setIsSent(true) sets isSent to true and queues a new render</li>
        <li>
          React re-renders the component according to the new isSent value
        </li>
      </ol>

      <hr />

      <b>Rendering takes a snapshot in time</b>
      <p>Rendering means React is called the component, which is a function.</p>
      <p>
        The JSX the component returns, with its state at the time of the render,
        is like a snapshot of the UI in time, its props, event handlers, local
        variables, etc.
      </p>
      <p>
        States lives in React itself, like on a shelf, outside of our component
        function, so when React calls the component it gives us a snapshot of
        the state for that particular render.
      </p>

      <p>
        So, in the example (1) we can see that setting state only changes it for
        the next render, running setNr twice doesn't increment it twice.
      </p>

      <hr />

      <b>State over time</b>
      <p>
        (2) As we see in this example, the value of the state is the same after
        the function updates the state, that's because the render is not yet
        triggered when we log the value to the console.
      </p>
      <p>
        (3) In this example though, we can see that even if we schedule to log
        the value, it will log the same old value, that's because React used a
        snapshot of the state at the time the user interacted with. So when we
        was schedulling, we passed the old value, and it remains unchanged even
        if there was a re-render triggered. A state varaible's value never
        changes within a render.
      </p>
      <b>
        React keeps the state values 'fixed' within one render's event handlers
      </b>
      <p>
        If we need to read the latest state before a re-render though, we can
        use <b>state updater function</b>
      </p>

      {/* 1 */}

      <b>1</b>
      <button onClick={updateNr}>update number</button>

      {/* 2 */}

      <br />
      <b>2</b>
      <button onClick={logNr}>update number</button>

      {/* 3 */}

      <br />
      <b>3</b>
      <button onClick={logScheduledNr}>update scheduled number</button>
    </div>
  );
}
