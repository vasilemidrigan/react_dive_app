import { useState } from "react";
import { useImmer } from "use-immer";

export default function UpdatingObjectsInState() {
  // 1, 2
  const [person, setPerson] = useState({
    name: "Leonardo",
    age: 0,
  });
  function changePerson() {
    person.name = "Leo";
    console.log(person);
  }
  // 2
  function updatePerson() {
    setPerson({
      name: "Leo",
      age: "20 months",
    });
    console.log(person);
  }

  // 3
  const [location, setLocation] = useState({
    country: "US",
    state: "Colorado",
    city: "Denver",
  });

  function handleChange(e) {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  }

  // 4
  const [residence, setResidence] = useState({
    country: "US",
    state: "Colorado",
    city: "Denver",
    outskirts: {
      first: "Littleton",
      second: "Greenwood Village",
      third: "Lakewood",
    },
  });

  function deepUpdate(e) {
    setResidence({
      ...residence,
      outskirts: {
        ...residence.outskirts,
        third: "Aurora",
      },
    });
  }

  // 5
  const denverOutskirts = { ...residence.outskirts, second: "Broomfield" };
  const denver = { ...residence, outskirts: denverOutskirts };

  function updateCity() {
    setResidence({ ...denver });
  }

  // 6

  const [city, setCity] = useImmer({
    country: "US",
    state: "Colorado",
    city: "Denver",
    outskirts: {
      first: "Littleton",
      second: "Greenwood Village",
      third: "Lakewood",
    },
  });

  function updateCityA() {
    setCity((draft) => {
      draft.outskirts.second = "Aurora";
    });
  }

  console.log(city);

  return (
    <div className="wrapper">
      <h1>Updating Objects in State</h1>

      <p>
        State can hold any type of JavaScript value, including objects, but we
        should'nt change objects directly, instead we need to create a new one,
        or a copy of the existing one, and then set the state to use that copy.
      </p>

      <b>What is a mutation?</b>
      <p>
        Primitive values are immutable, for example number 5 will always be
        number 5, we can't mutate it, that is not natural.
      </p>
      <p>
        With objects though, we can do it. We can mutate the object, as it
        consists from many properties that we can change.
      </p>
      <p>
        (1) However, although objects in React state, technically are mutable,
        we should treat them as if they were immutable like primitives. And
        instead of mutating them, we need to always replace them.
      </p>
      <p>
        As we can see in the example (1), when changing an object directly, it
        doesn't trigger a render and so React has no ideea that the object is
        changed.
      </p>
      <p>
        (2) So, instead we need to change the object using the set state
        function, and pass to it the newly created object.
      </p>

      <p>
        So in the example (3), we are using computed values like in JavaScript,
        in order to avoid repetitive code, and what is more important in this
        context, we are using spread operator to copy the rest of the object so
        we don't need to waste our time and rewrite big chunks of the rest of
        the object.
      </p>
      <p>
        Spread opertor does shallow copies, so if we need to make deep copy we
        need to use it several times.
      </p>

      <b>Updating a nested object</b>

      <p>(4) This is how to update nested objects.</p>

      <p>(5) Or we can do like this.</p>

      <p>It gets a little wordy, but it is fine for many cases.</p>

      <b>
        Nested objects are not really, nested, they are different objects,
        pointing to each other.
      </b>

      <b>Write concise update logic with Immer</b>

      <p>
        If the object is huge, copying it with spread will be tedious, so in
        such cases, we can flattening it, if we consider to change the structure
        of the object, but that's can be not a best solution. So we can use
        Immer library.
      </p>

      <p>
        (6) Immer lets you write using the convenient but mutating syntax, it
        looks like we are breaking the rule of mutating objects in React, but it
        doesn't as it performs all in React style underneath the hood.
      </p>

      <p>
        It is very convenient to use Immer when we have huge objects, we can
        combine useImmer with useState as well
      </p>
      {/* ---------------------------------------------------------------- */}

      {/* 1 */}

      <div>{person.name}</div>
      <button onClick={changePerson}>change Person</button>

      {/* 2 */}

      <button onClick={updatePerson}>update Person</button>

      {/* 3 */}

      <label>
        Country:
        <input
          name="country"
          value={location.country}
          onChange={handleChange}
        />
      </label>
      <label>
        State:
        <input name="state" value={location.state} onChange={handleChange} />
      </label>
      <label>
        City:
        <input name="city" value={location.city} onChange={handleChange} />
      </label>

      {/* 4 */}

      <button onClick={deepUpdate}>update residence</button>

      {/* 5 */}

      <button onClick={updateCity}>update city</button>

      {/* 6 */}

      <button onClick={updateCityA}>update city</button>
    </div>
  );
}
