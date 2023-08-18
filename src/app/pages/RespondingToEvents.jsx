export default function RespondingToEvents(props) {
  // *
  function handleClick() {
    console.log("clicked");
  }

  const handleClicks = function () {
    console.log("clicks");
  };

  const handleClickos = () => {
    console.log("clickos");
  };
  // -------------------------------
  // ****
  function onLeftClick() {
    console.log("clicked with the left mouse button :D ");
  }
  // -------------------------------
  return (
    <div className="wrapper">
      <h1>Responding to Events</h1>
      <p>
        (*) When passing events, we don't need to call them, we only pass the
        function handler and it is called when the event is triggered, but if we
        pass it as a function call, then it will get called one time on the
        render, and then it will not run anymore when trigger the event again.
      </p>

      <p>
        (**) We can read props in event handlers, as the event is declared
        inside the component.
      </p>

      <p>(***) We can pass event handlers as props.</p>

      <p>
        (****) Built-in components like {"<button>"} for example only supports
        browser event names like onClick for example, but we can name our
        component's event handlers as we want, the convention though is to begin
        with 'on', for example onCrash.
      </p>

      {/* (*) */}

      <button onClick={handleClick}>click</button>
      <button onClick={handleClicks}>click</button>
      <button onClick={handleClickos}>click</button>

      <button onClick={() => console.log("clicked")}>click</button>
      <button
        onClick={function handleClick() {
          console.log("clicked");
        }}
      >
        click
      </button>
      <button
        onClick={function () {
          console.log("clicked");
        }}
      >
        click
      </button>

      {/* (**) */}

      <button onClick={() => console.log(props.message)}>
        click to see the message from component's props
      </button>

      {/* (***) */}

      <Button onclick={() => console.log("Hello!")} message={"click here"} />

      {/* (****) */}

      <Btn onLeftBtn={onLeftClick} message={"left click here"} />
    </div>
  );
}

// ***
function Button({ onclick, message }) {
  return <button onClick={onclick}>{message}</button>;
}
// ------------------------------------
// ****
function Btn({ onLeftBtn, message }) {
  return <button onClick={onLeftBtn}>{message}</button>;
}
