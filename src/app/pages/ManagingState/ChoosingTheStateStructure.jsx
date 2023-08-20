import { useState } from "react";

export default function ChoosingTheStateStructure() {
  // 1
  // bad solution
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // a better solution
  const [person, setPerson] = useState({
    firstName,
    lastName,
  });

  return (
    <div className="wrapper">
      <h1>Choosing the State Structure</h1>

      <p>
        Structuring state well can make a difference between a component that is
        pleasant to modify and debug and another that is constant source of
        bugs.
      </p>

      <b>Principles of structuring state</b>

      <ul>
        <li>
          <b>Group related states</b>
          If there are two or more state variables that we update at the same
          time always, consider merget them into one state. As we can see in
          example (1), we can use an object with two properties instead.
        </li>
        <li>
          <b>Avoid contradictions in state</b>
          Avoid states where several pieces contradicts to each other. So if
          there are two states for example, that can't be true at the same time
          it is better to replace them with one status variable that will take
          three valid states: typing, sending and sent for example.
        </li>
        <li>
          <b>Avoid duplication in state</b>
          Reduce duplication when we can, as we can gain problems with sync.
        </li>
        <li>
          <b>Avoid deeply nested state</b>
          Avoid complex deep states, prefer flat approach instead. We can
          implement flat state, which will make it easier for to work with, and
          even improve performance if the data is huge.
        </li>
        <li>
          <b> Avoid redundant state</b>
          If there is a state that we can do well without it, then we should
          remove it, don't implement states that hold information that can be
          calculated without this additional headache.
        </li>
      </ul>

      <b>Don't mirror props in state</b>
      <p>
        We should'nt mirror props in state, as if the parent passes a new value
        to the prop, it won't get updated in the state, as the state in only
        initialized during the first render.
      </p>
      <p>
        (1) We can do that only if we need the first value from the prop, or if
        we want to keep sync with the prop, we can assign it to a regular
        variable.
      </p>
    </div>
  );
}

// 2
