import { useState } from "react";

export default function PreservingAndResetingState() {
  // 1
  const [isActive, setIsActive] = useState(false);

  function switchActive() {
    setIsActive(isActive ? false : true);
  }

  return (
    <div className="wrapper">
      <h1>Preserving and Resetting State</h1>
      <p>
        State is isolated between components, you can control when to preserve
        state and when to reset it between re-renders.
      </p>
      <b>The UI tree</b>
      <p>
        React makes UI trees and uses JSX to create React DOM, and then it
        updates the browser DOM to match the React DOM.
      </p>
      <b>State is tied to a position in the tree</b>
      <p>
        If a component is deleted from the UI tree, then it completely discards
        its states as well.
      </p>
      <p>
        Updating a component doesn't reset or delete its states, because the
        components preserves its position in the tree.
      </p>
      <p>
        (1) To React it matters the position of the component in the UI tree not
        in the JSX markup, so even if we have a condition which runs the
        component with different styles depending on the parent state, from
        Reacts perspective thats the same component, because it is in the same
        position in the tree.
      </p>

      <b>Different components at the same position reset state</b>

      <p>
        By the other hand, if you place at the same position a different
        component, the component that is removed losts its states as well. So if
        we have a condition which runs two different components, then switching
        condition will remove the state everytime the component is deleted from
        the tree.
      </p>

      <b>
        If we render a different component at the same position, it resets the
        state of its entire subtree.
      </b>

      <b>
        As a rule of thumb, if you want to preserve states between re-renders,
        you need to match-up the structure of your tree, otherwise if the
        structure is different, the state gets destroyed, because React destroys
        states when removes components.
      </b>

      <b>
        Don't nest component function definitions, as they will get destroyed
        when the parent component will re-render. It will create another
        component from that function definition, so to solve that, we need to
        pass component function definitions at the top level.
      </b>

      <b>Resetting state at the same position</b>

      <p>
        If we have two components that we need them to reset their states when
        switching between them for example as a result of a condition,
      </p>

      <b>
        (2) Render components in different positions. So in this example, those
        two lines are reserved for two diferent nodes in the tree, so when
        switching the condition, obviously the state is destroyed.
      </b>

      <b>
        (3) We can give each component an explicit identity with key. This is a
        more generic method, so we can tell React that those two components are
        in fact different, even if they appear in the same place in JSX.
      </b>

      <p>
        Reseting states in those two ways, especial the last one, is very very
        handy. Also when working with forms, we can implement this approach as
        we'll need to reset for example the text form the textarea when changing
        for example the recipient, in order to not send accidentally to another
        person the message we already sent to the previous one.
      </p>

      <b>Preserving state for removed components</b>

      <p>
        There are few ways to keep the state alive for a component that's no
        longer visible.
      </p>
      <ul>
        <li>
          If there are not so much components, the tree is not huge, we can use
          CSS to hide other components while keeping the current one visible,
          and switching styles when we want to see another component.
        </li>
        <li>
          The most common solution is to lift up the state to the parent, and if
          the component is removed we have the pendingMessage state in the
          parent so we keep there the important information.
        </li>
        <li>
          Or you maybe want the message to persist, even if the user closed the
          page. To implement this we can initialize the state by reading from
          the localStorage and save the drafts there too.
        </li>
      </ul>

      {/* 1 */}

      {isActive ? <Block color={"red"} /> : <Block color={"yellow"} />}
      <button onClick={switchActive}>switch active</button>

      {/* 2 */}

      {isActive && <Block color={"red"} />}
      {!isActive && <Block color={"brown"} />}

      {/* 3 */}

      {isActive ? (
        <Block key="1" color="aqua" />
      ) : (
        <Block key="2" color="grey" />
      )}
    </div>
  );
}

// 1

function Block({ color }) {
  const [counter, setCounter] = useState(0);

  return (
    <div
      className="block"
      style={{
        backgroundColor: `${color}`,
        cursor: "pointer",
        textAlign: "center",
        border: "1px solid purple",
        width: "50px",
        height: "50px",
      }}
      onClick={() => setCounter(counter + 1)}
    >
      {counter}
    </div>
  );
}
