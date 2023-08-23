import { useReducer, createContext, useContext } from "react";

export const NameContext = createContext(null);
export const NameDispatchContext = createContext(null);

export default function ScalingUpWithReducerAndContext() {
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
    <div className="wrapper">
      <h1>Scaling up with Reducer and Context</h1>

      <p>
        We can combine Reducers with Context together to manage state of a
        complex screen.
      </p>

      <p>
        If we have some tasks and dispatch functions in the top-level component
        for example, and we need to pass it down to another components,
        obviously this operation becomes frustrating as we have prop drilling.
      </p>

      <p>
        If there are not so much to pass, that's ok, but as we get more states
        and event handlers, then we need to implement something different.
      </p>

      <p>The solution is to combine context and reducer.</p>

      <ul>
        <li>Create the context</li>
        <li>Put state and dispatch into context</li>
        <li>Use context anywhere in the tree</li>
      </ul>

      <p>
        We can also move all wiring into a single file. Moving the reducer and
        context into a single separate file will significantly improve
        readability. See (contextAndReducerSeparately) directory.
      </p>

      <NameContext.Provider value={name}>
        <NameDispatchContext.Provider value={dispatch}>
          <Child />
        </NameDispatchContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

function Child() {
  const name = useContext(NameContext);
  const dispatch = useContext(NameDispatchContext);

  return <input value={name} onChange={() => dispatch({ type: "change" })} />;
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
