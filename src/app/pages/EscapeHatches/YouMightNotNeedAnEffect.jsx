import { useState, useEffect } from "react";

export default function YouMightNotNeedAnEffect() {
  // 1 (commented code bellow is the inefficient approach)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName; //  *
  // const [fullName, setFullName] = useState("");

  // useEffect(() => {
  //   setFullName(firstName + " " + lastName);
  // }, [firstName, lastName]);

  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("fullName", fullName);

  return (
    <div className="wrapper">
      <h1>You Might Not Need an Effect</h1>

      <p>
        If there is no external system involved, if you for example want to
        update a state when a props or state changes, you shouldn't need an
        effect.
      </p>

      <p>
        <b>You don't need effects to transform data for rendering.</b>
        It is pretty inefficient update some state with effects if there is no
        external system, as React will commit the render code, the DOM is ready
        and now we have to run effects which starts a re-render again.
      </p>
      <p>
        <b>You don't need Effects to handle user events.</b>
      </p>

      <br />
      <b>Updating states based on props</b>
      <p>
        (1) One example is updating fullName variable based on firstName and
        lastName variables. A usual mistake is to use useEffect for that. The
        problem is that with useEffect we are complicating with re- rendering,
        to complex solution, etc.
      </p>
      <p>
        When something can be calculated from props and states, don't put it in
        state, instead calculate it during rendering just like with the example
        (1) on the line (*)
      </p>

      <br />

      <b>Caching expensive calculations</b>

      <p>
        We can cache expensive calculations with useMemo, in order to avoid
        them.
      </p>

      {/* 1 */}
      <input
        value={firstName}
        onChange={() => setFirstName(event.target.value)}
      />
      <input
        value={lastName}
        onChange={() => setLastName(event.target.value)}
      />

      {/* 2 */}

      <TodoList todos={todos} filter={filterList} />
    </div>
  );
}

// 2
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");

  // inefficient solution
  // const [visibleTodos, setVisibleTodos] = useState([]);

  console.log("render");

  function getFilteredTodos(list, filter) {
    let items = filter(list);

    return items;
  }

  // inneficient solution
  // useEffect(() => {
  //   setVisibleTodos(getFilteredTodos(todos, filter));
  // }, [todos, filter]);

  return (
    <>
      {visibleTodos.map((todo) => (
        <div key={todo.a}>{todo.a}</div>
      ))}
    </>
  );
}

let todos = [
  { a: 1 },
  { a: 2 },
  { a: 3 },
  { a: 4 },
  { a: 5 },
  { a: 6 },
  { a: 7 },
];

function filterList(items) {
  let list = items.filter((item) => item.a > 2);
  return list;
}
