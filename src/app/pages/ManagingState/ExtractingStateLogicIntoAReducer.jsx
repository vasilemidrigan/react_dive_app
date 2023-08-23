import { useState, useReducer } from "react";

export default function ExtractStateLogicIntoAReducer() {
  return (
    <div className="wrapper">
      <h1>Extract State Logic into a Reducer</h1>

      <p>
        When we have a lot of states spread across the component in many event
        handlers, we can think about a better state logic.
      </p>

      <p>
        So in this case we can consolidate all the state logic outside of the
        component into a function called reducer.
      </p>

      <p>We can migrate from useState to useReducer in three steps:</p>
      <ol>
        <li>Move from setting state to dispatching actions</li>
        <li>Write a reducer function</li>
        <li>Use the reducer from your component</li>
      </ol>

      <b>Step 1: Move from setting state to dispatching actions</b>
      <p>
        Instead of telling React what to do we say what the user just did by
        dispatching actions from your event handler.
      </p>
      <b>the object we pass to dispatch is an action.</b>
      <p>
        It is regular JS object, we can put in it whatever we want, but generaly
        we need to pass a minimum information about what happened.
      </p>

      <b>Step 2: Write a reducer function</b>
      <p>
        A reducer function is where we put our state logic. It takes two
        arguments, the current state and the action object, and it returns a new
        state.
      </p>
      <b>React will set the state to what you return from the reducer.</b>
      <b>
        Steps to move the logic from your event handlers to a reducer function:
      </b>
      <ul>
        <li>declare the current state as the first argument</li>
        <li>declare the action object as the second argument</li>
        <li>return the next state from the reducer</li>
      </ul>

      <b>It is a convention to use switch statements inside reducers.</b>
      <hr />

      <b>
        Finally we need to hook up our reducer function to our component by
        importing useReducer and setting it.
      </b>
      <hr />
      <b>
        Because we get the state as an argument, we can declare the reducer
        outside of the component which makes the code even more readable.
      </b>
      <hr />
      <b>Comparing useState with useReducer</b>

      <p>
        codesize: with useState generally we write less code, but if there are
        many event handlers we could implement useReducer
      </p>
      <p>
        readability: useState is easy to read as far as there are some of them,
        if there are a lot of them, the logic becomes hard to read, so we have
        to use a better option.
      </p>
      <p>it is easier to debug useReducer.</p>
      <p>
        testing: a reducer is a pure function, so it doesn't depend on the
        component, so we can export it and test separately in isolation.
      </p>
      <p>
        personal preference also is up to you, anyway, you can switch between
        them back and forth.
      </p>
      <p>
        you don't need to use useReducer for everything, there is a tradeoff.
      </p>

      <br />

      <b>Keep in mind two things when writing reducers:</b>
      <ul>
        <li>
          reducers must be pure. No requests, schedule timeouts, side effects,
          etc. No operations that impact things outside of the component. Update
          objects and arrays without mutation.
        </li>
        <li>
          each action describes a single user interaction, even if that leads to
          multiple changes in the data.
        </li>
      </ul>

      <br />

      <b>
        We can use useImmerReducer to make reducres more concise, so we can
        mutate the state with push or arr[i] = ...
      </b>

      <pre>
        {`
         function tasksReducer(draft, action) {
          switch (action.type) {
            case 'added': {
              draft.push({
              id: action.id,
              text: action.text,
              done: false,
          });
          break;
        }`}
      </pre>
      <hr />
      <Identification />
    </div>
  );
}

function Identification() {
  const [name, dispatch] = useReducer(nameReducer, "Leonardo");

  function changeName() {
    dispatch({
      type: "change",
    });
  }

  function deleteName() {
    // action object passed to dispatch()
    dispatch({
      type: "delete",
    });
  }

  function capitalizeName() {
    dispatch({
      type: "capitalize",
    });
  }

  function lowercaseName() {
    dispatch({
      type: "lowercase",
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={name} onChange={changeName} />
        <br />
        <button onClick={deleteName}>delete name</button>
        <button onClick={capitalizeName}>capitalize name</button>
        <button onClick={lowercaseName}>lowercase name</button>
      </label>
      The name is: {name}
    </>
  );
}

// reducer function
function nameReducer(name, action) {
  switch (action.type) {
    case "change": {
      return event.target.value;
    }
    case "delete": {
      return "";
    }
    case "capitalize": {
      return name.toUpperCase();
    }
    case "lowercase": {
      return name.toLowerCase();
    }
    default: {
      throw Error("Unknown action: ", action.type);
    }
  }
}
