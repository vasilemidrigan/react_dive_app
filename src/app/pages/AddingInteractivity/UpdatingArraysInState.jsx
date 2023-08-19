import { useState } from "react";

export default function UpdatingArraysInState() {
  // 1
  const [name, setName] = useState([]);
  const [scientists, setScientists] = useState([]);

  // 3
  let initialFellows = [
    { id: 0, name: "Leonardo" },
    { id: 1, name: "Christian" },
    { id: 2, name: "Tom" },
  ];

  const [fellows, setFellows] = useState(initialFellows);

  console.log(fellows);

  // 4
  let initialPoints = [
    { id: "a", bgColor: "purple", x: 25, y: 25 },
    { id: "b", bgColor: "red", x: 95, y: 25 },
    { id: "c", bgColor: "purple", x: 165, y: 25 },
    { id: "d", bgColor: "black", x: 235, y: 25 },
    { id: "e", bgColor: "purple", x: 305, y: 25 },
  ];

  const [points, setPoints] = useState(initialPoints);

  function movePurples() {
    const movedPurples = points.map((p) => {
      if (p.bgColor !== "purple") {
        return p;
      } else {
        return {
          ...p,
          x: p.x + 25,
          y: p.y + 15,
        };
      }
    });

    setPoints(movedPurples);
  }

  // 5
  function replacePoints() {
    const replacedPoints = points.map((p) => {
      if (p.bgColor === "purple") {
        return {
          id: Math.random(),
          bgColor: "green",
          x: 10,
          y: 10,
        };
      } else {
        return p;
      }
    });

    setPoints(replacedPoints);
  }

  // 6

  const [nik, setNik] = useState("");

  function insertFellow() {
    let index = 2; // the position we need for example

    setFellows([
      ...fellows.slice(0, index),
      { id: Math.random(), name: nik },
      ...fellows.slice(index),
    ]);
  }

  // 7

  let initialMeals = [
    { id: 1, title: "hamburger" },
    { id: 2, title: "baked beans" },
    { id: 3, title: "chicken" },
  ];

  const [meals, setMeals] = useState(initialMeals);

  function reverse() {
    let arr = [...meals];
    arr.reverse();
    setMeals(arr);
  }

  return (
    <div className="wrapper">
      <h1>Updating Arrays in State</h1>

      <p>
        Just like with objects, with arrays we also need to have the same
        approach when we want to update them.
      </p>

      <b>Updating Arrays without mutation</b>
      <p>
        We can't just reassign items like arr[0] = 1, and we shouldn't use
        methods that mutates the array such as push() and pop().
      </p>
      <p>
        Every time we want to update an array, we need to pass a new array to
        our state setting function.
      </p>
      <p>
        We can do that by creating a new array from the original one, by calling
        its non-mutating methods like filter() and map(), so we can set the
        state to the result array.
      </p>
      <b>Avoid these methods when dealing with arrays in React:</b>
      <ul>
        <li>
          <b>Adding:</b> push, unshift
        </li>
        <li>
          <b>Removing: </b> pop, shift, splice
        </li>
        <li>
          <b>Replacing: </b>
          splice, arr[i] = ... assignment
        </li>
        <li>
          <b>Sorting:</b>
          reverse, sort
        </li>
      </ul>

      <b>Prefer using these methods, which returns a new array</b>
      <ul>
        <li>
          <b>Adding:</b>
          concat, [...arr]
        </li>
        <li>
          <b>Removing:</b>
          filter, slice
        </li>
        <li>
          <b>Replacing:</b>
          map
        </li>
        <li>
          <b>Sorting:</b>
          copy the array first
        </li>
      </ul>

      <b>Adding to an array</b>

      <p>(1) In this example we're mutating the array, which is not good.</p>
      <p>
        (2) Instead, we can implement the same approach as with objects, using
        spread operator. So, in this example we're putting the item at the end,
        but we can put at the start as well.
      </p>

      <b>Removing from an array</b>

      <p>
        (3) The easiest way, is to filter it out, in other words, produce an
        array without it.
      </p>

      <b>Transforming an Array</b>

      <p>
        (4) We can tranform an array by using map. Executing a function on each
        item of the array.
      </p>

      <b>Replacing items in an array</b>

      <p>
        (5)For this purpose we can also use map. Create a new array with map,
        inside our map call we have the index that we can use to replace or to
        leave it as it is.
      </p>

      <b>Inserting into an array</b>
      <p>
        If we want to insert an item into an array, neither at the start or at
        the end, we can use spread operator with slice()
      </p>

      <b>Making other changes like sorting or reversing or another</b>

      <p>
        (7) We can make all other changes as well, but the problem is that for
        those another operations, we need to use methods that mutates the array,
        so what we can do is very simple:
        <b>
          We copy the array into another variable by using the spread operator
          or something more complex in order to get a deep copy, and then we
          apply the methods we need on that copy and only after we just set the
          state back to this newly changed array.
        </b>
      </p>

      <hr />
      {/* ------------------------------------------ */}
      {/* 1 */}
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          scientists.push({ name: name });
        }}
      >
        push name
      </button>

      {/* 2 */}
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setScientists([...scientists, { name: name }]);
        }}
      >
        push name
      </button>

      {/* 3 */}

      <ul>
        {fellows.map((f) => (
          <li key={f.id}>
            {f.name}
            <button
              onClick={() => {
                setFellows(fellows.filter((fellow) => fellow.id !== f.id));
              }}
            >
              delete fellow
            </button>
          </li>
        ))}
      </ul>

      {/* 4 */}

      <button onClick={movePurples}>move purples</button>

      {points.map((p) => (
        <div
          key={p.id}
          style={{
            background: p.bgColor,
            width: "50px",
            height: "50px",
            position: "absolute",
            left: p.x,
          }}
        ></div>
      ))}

      {/* 5 */}

      <button onClick={replacePoints}>replace points</button>

      {points.map((p) => (
        <div
          key={p.id}
          style={{
            background: p.bgColor,
            width: "50px",
            height: "50px",
            position: "absolute",
            bottom: p.y,
            left: p.x,
          }}
        ></div>
      ))}

      {/* 6 */}

      {fellows.map((f) => (
        <div key={f.id}>{f.name}</div>
      ))}

      <input
        value={nik}
        onChange={(e) => {
          setNik(e.target.value);
        }}
      />
      <button onClick={insertFellow}>insert fellow</button>

      {/* 7 */}

      {meals.map((m) => (
        <div key={m.id}>{m.title}</div>
      ))}

      <button onClick={reverse}>reverse</button>
    </div>
  );
}
