import { useState } from "react";

export default function QueueingASeriesOfStateUpdates() {
  // 1
  const [value, setValue] = useState(0);

  function updateValue() {
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
  }
  // 2
  function updValue() {
    setValue((value) => value + 1);
    setValue((value) => value + 1);
    setValue((value) => value + 1);
  }
  // 3
  function updValues() {
    setValue(4); // the same as setValue(n + 4);

    setValue((value) => value + 1);
    setValue((value) => value + 1);
  }
  // 4
  function overWriteUpdates() {
    setValue(4); // replace value with 4

    setValue((value) => value + 1);
    setValue((value) => value + 1);

    setValue(4); // replace value with 4
  }
  return (
    <div className="wrapper">
      <h1>Queueing a Series of State Updates</h1>

      <p>
        Setting a state variable will queue another render, but sometimes we
        want to perform multiple operations on the value before queueing the
        next render. To do this, we need to understand how React batches state
        updates.
      </p>

      <b>React batches state updates</b>
      <p>
        (1) React waits until all code in the event handlers has run before pro-
        cessing your state updates. As we see in the example, event if our fun-
        ctions has 3 set state calls inside the handler function, it will update
        our value only once at each render.
      </p>
      <p>
        This remind us of a waiter at the restaurant, he will not run to the
        kitchen at the first mention of our dish, instead it will wait untill we
        finish the order, so we can change it if we need, and take orders from
        other people at the table.
      </p>
      <p>This technique is known as batching, which makes React faster.</p>

      <b>Updating the same state multiple times before the next render</b>
      <p>
        (2) If we need to update the same state multiple times before the
        render, we can pass a function that calculates the next state based on
        the previous one in the queue.
      </p>
      <p>
        Here, {"n => n + 1"} is called an <b>updater function</b>
      </p>
      <ol>
        <li>
          React queues this function to be processed after all the other code in
          the event handler has run.
        </li>
        <li>
          During the next render, React goes through the queue and gives you the
          final update state.
        </li>
      </ol>
      <p>
        (3) If we update the state after the state is replaced, the replacement
        goes first in the queue, then React gets the value from replacement and
        uses it to execute updates in the queue.
      </p>
      <p>
        (4) If we'll add a replacement on the end of the queue, the replacement
        of course will overwrite all the updates.
      </p>

      <b>
        An updater function, gets the state updated value added to the queue,
        while any other replacement, just overwrites what is already queued.
      </b>

      <hr />

      <b>Naming conventions:</b>
      <p>
        It is common to name the updater function by the first letters of the
        corresponding variable:{" "}
        {`setCounter(c => c + 1); 
        setFirstName(fn => fn.toUpperCase())`}
      </p>
      <p>
        Or just repeat the variable name:
        {"setConvention(convention => convention.toLowerCase())"}
      </p>
      <p>Or, use the prefix: {"setEnabled(prevEnabled => !prevEnabled)"}</p>

      {/* 1 */}

      <button onClick={updateValue}>value: {value}</button>

      {/* 2 */}

      <button onClick={updValue}>Value: {value}</button>

      {/* 3 */}

      <button onClick={updValues}>Values: {value}</button>

      {/* 4 */}

      <button onClick={overWriteUpdates}>OverWrited: {value}</button>
    </div>
  );
}
