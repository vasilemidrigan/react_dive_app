import { useState, useEffect, useMemo } from "react";

export default function YouMightNotNeedAnEffect() {
  // 1 (commented code bellow is the inefficient approach)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName; //  *
  // const [fullName, setFullName] = useState("");

  // useEffect(() => {
  //   setFullName(firstName + " " + lastName);
  // }, [firstName, lastName]);

  // 3
  const [user, setUser] = useState(0);

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

      <p>
        The code on lines (**) are inefficient solution, on line(*) though, it
        is efficient, only if the function is not slow. If it is slow, we can
        use memoization (***), so we do not recalculate complex data, we only
        run the function when either one of the variables from the dependency
        array is changed.
      </p>

      <p>
        In the example (****) we are verifying the time it takes to run the
        function, if there is more than 1ms, probably it is better to memoize
        it. For testing on slow CPU we can use CPU Throttling
      </p>

      <br />

      <b>(3) Resetting all state when a prop changes</b>

      <br />

      <p>
        We are passing key to Profile component so React will update the input
        whenever the component changes, the problem we solve is that we don't
        need to use useEffect in order to set the comment to an empty string
        whenever the component Profile changes.
      </p>

      <br />

      <b>Adjusting some state when a prop changes</b>

      <p>
        (4) Sometimes we want to only reset or adjust a part of the state based
        on a prop change. This List component receives a list of items as a
        prop, and maintains the selected item in the selection state variable.
        You want to reset the selection to null whenever the items prop receives
        a different array:
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

      {/* 3 */}

      <ProfilePage userId={user} />
      <button onClick={() => setUser(Math.floor(Math.random() * 10))}>
        changeUser
      </button>
    </div>
  );
}

// 2
function TodoList({ todos, filter }) {
  // const visibleTodos = getFilteredTodos(todos, filter); // *

  // ***
  console.time("visibleTodos"); // ***
  const visibleTodos = useMemo(() => {
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
  console.timeEnd("visibleTodos");
  // const [visibleTodos, setVisibleTodos] = useState([]); **

  function getFilteredTodos(list, filter) {
    let items = filter(list);

    return items;
  }

  // inneficient solution **
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

// 3

function ProfilePage({ userId }) {
  // -------------------------------------------
  // pass this line to Profile
  // const [comment, setComment] = useState("");
  // -------------------------------------------
  console.log("render PRofilePage");

  return (
    <div className="wrapper">
      <h3>Profile Page</h3>
      <Profile userId={userId} key={userId} />
      {/* -------------------------------------- */}
      {/* pass input to Profile as well */}
      {/* <label>
        comment
        <input
          value={comment}
          onChange={() => setComment(event.target.value)}
        />
      </label> */}
      {/* -------------------------------------- */}
    </div>
  );
}

function Profile({ userId }) {
  // --------------------------------
  const [comment, setComment] = useState("");
  // --------------------------------

  return (
    <>
      <h4>Profile userId: {userId} </h4>
      {/* ---------------------------- */}
      <label>
        comment
        <input
          value={comment}
          onChange={() => setComment(event.target.value)}
        />
      </label>
      {/* ---------------------------- */}
    </>
  );
}
