// 2
import { useState, createContext, useContext } from "react";

// 3 (create LevelContext with the default value of 1)
export const LevelContext = createContext(1);

export default function PassingDataDeeplyWithContext() {
  return (
    <div className="wrapper">
      <h1>Passing data deeply with Context</h1>
      <p>
        Passing data through components can become very verbose if we need to
        pass it very deep.
      </p>
      <p>
        So, we can use Context to allow a parent to make some information
        available to any component in the tree below, no matter how deep, and
        without explicitly passing props.
      </p>
      <b>
        The problem with passing props is that the code becomes really quickly
        verbose if there is a lot of levels that we need to pass until the
        component that needs that prop.
      </b>
      <br />
      <b>The process of creating and passing context:</b>
      <ul>
        <li>Create a context.</li>
        <li>Use the context from the component that needs the data. </li>
        <li>
          Provide that context from the component that specifies the data.
        </li>
      </ul>

      <br />

      <p>useContext tells React that a component want to read a context</p>

      <p>
        If we wrap a tree into a context, we will get the value of the context
        on each nested component, until we overwrite it with another context.
      </p>

      <p>
        We can provide many context without problems, and use multiple contexts
        values as well.
      </p>

      <p>Don't overuse Context.</p>
      <ul>
        <li>
          Start by passing props. If components are not trivial, is not unusual
          to pass a dozen props to a dozen components. Make the data flow
          explicit, this is code for mantaining code.
        </li>
        <li>Extract components and pass JSX as children to them.</li>
      </ul>

      <p>
        Use cases for Context: theming, current account, routing, managing
        states, etc.
      </p>
      {/* 1 */}
      <Parent children={Child} />
    </div>
  );
}

// 1

function Parent() {
  const [level, setLevel] = useState(5);

  return (
    <>
      <LevelContext.Provider value={level}>
        <Child text={"lorem ipsum"} />
        <LevelContext.Provider value={level + 1}>
          <Child text={"lorem ipsum +1"} />
        </LevelContext.Provider>
      </LevelContext.Provider>
    </>
  );
}

function Child({ text }) {
  const level = useContext(LevelContext);

  console.log("level is: ", level);
}
