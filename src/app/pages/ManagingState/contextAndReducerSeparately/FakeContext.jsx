import { useReducer, createContext, useContext } from "react";

export const NameContext = createContext(null);
export const NameDispatchContext = createContext(null);

export function useName() {
  return useContext(NameContext);
}

export function useDispatchName() {
  return useContext(NameDispatchContext);
}

export default function FakeContext({ children }) {
  const [name, dispatch] = useReducer(nameReducer, "Leonardo");

  // in cases when we need to combine dispatch with some other functionality,
  // we can nest them into a function and pass it with the context
  function changeName() {
    console.log("the name changed");
    dispatch({
      type: "change",
    });
  }

  function deleteName() {
    // action object passed to dispatch()
    console.log("the name is deleted");
    dispatch({
      type: "delete",
    });
  }

  function capitalizeName() {
    console.log("the name is capitalized");
    dispatch({
      type: "capitalize",
    });
  }

  function lowercaseName() {
    console.log("the name is lowercased");
    dispatch({
      type: "lowercase",
    });
  }

  return (
    <div className="wrapper">
      <NameContext.Provider value={name}>
        <NameDispatchContext.Provider value={dispatch}>
          {children}
        </NameDispatchContext.Provider>
      </NameContext.Provider>
    </div>
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
