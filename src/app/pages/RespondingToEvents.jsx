export default function RespondingToEvents() {
  function handleClick() {
    console.log("clicked");
  }

  const handleClicks = function () {
    console.log("clicks");
  };

  const handleClickos = () => {
    console.log("clickos");
  };

  return (
    <div className="wrapper">
      <h1>Responding to Events</h1>
      <p>
        When passing events, we don't need to call them, we only pass the
        function handler and it is called when the event is triggered, but if we
        pass it as a function call, then it will get called one time on the
        render, and then it will not run anymore when trigger the event.
      </p>

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
    </div>
  );
}
