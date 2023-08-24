import { useEffect, useState, useRef } from "react";

export default function SynchronizingWithEffects() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="wrapper">
      <h1>Synchronizing with Effects</h1>

      <p>
        Effects let you run some code after rendering so that you can
        synchronize your component with some system outside of React.
      </p>

      <b>What are effects, and how are they different from events?</b>

      <br />

      <ul>
        <li>
          <b>Rendering code</b> lives at the top of your component. This is
          where we use our states and props to transform them and return JSX.
          Rendering code must be pure.
        </li>
        <li>
          <b>Event Handlers</b>
          are nested functions inside your component that do things rather than
          calculate them. Event handlers contain side effects, so they change
          the program state, caused by ac specific user action.
        </li>
        <li>
          Effects let you specify side effects that are caused by rendering
          itself rather than by a particular event. Setting up a server
          connection is an Effect, because no matter which interaction caused
          the component to appear, it should happen.
        </li>
      </ul>

      <p>
        You might not need an effect. Don't overuse effects, use them when you
        need to step out of React and synchronize with an external system,
        browser API, third-party, widgets, networks, etc. If your effect only
        adjust some state based on another state, you might not need an effect.
      </p>

      <br />

      <ol>
        <li>Declare and effect</li>
        <li>Specify the Effect dependencies </li>
        <li>Add cleanup if needed</li>
      </ol>

      <p>
        As we can see in example (1), if we need to perform some actions based
        on a DOM element, we need to wrap those actions into an useEffect, if we
        will not, then the code will try to access the DOM element during
        rendering, which means it is not accessible, so the code in the
        useEffect runs out of rendering stage, which is what we need. So the
        screen updates, our DOM is ready, and only then we run our useEffect.
      </p>

      <p>
        We can set a useEffect to run on every render, by omiting the second
        argument, only once on mount stage, by specifying an empty array as the
        second argument, and run based on a specific state change.
      </p>

      <p>
        In a dependency array we need to specify only those objects for example,
        that are not stable, that changes, so we need to perform some actions
        based on those changes, if there is a stable variable, we don't need to
        specify it, though we can.
      </p>

      <p>
        (2) There are certain cases when we need to run a cleanup function, like
        for example when we have a connection, and then we'll need to
        disconnect.
      </p>

      <p></p>

      {/* 1 */}

      <Header />

      {/* 2 */}

      <input value={message} onChange={handleMessage} />
      <Connecting message={message} />

      <RunOnEveryRender />
      <RunOnce />
      <CountEffect count={count} />

      <button onClick={incrementCount}>increment count</button>
    </div>
  );
}

// 1
function Header() {
  let ref = useRef(null);

  useEffect(() => {
    if (1) {
      ref.current.style.border = "1px solid purple";
    }
  });

  return <h1 ref={ref}>Weird Header</h1>;
}

// 2

function Connecting({ message }) {
  useEffect(() => {
    let id = setInterval(() => console.log(message), 1000);

    return () => clearInterval(id);
  });
}

// --------------------------

function RunOnEveryRender() {
  useEffect(() => {
    console.log("Effect runs on every render");
  });
}

function RunOnce() {
  useEffect(() => {
    console.log("Effect run once.");
  }, []);
}

function CountEffect({ count }) {
  useEffect(() => {
    if (count > 0) {
      console.log("counter is bigger than 0.");
    } else {
      console.log("counter is 0 or negative.");
    }
  }, [count]);
}
