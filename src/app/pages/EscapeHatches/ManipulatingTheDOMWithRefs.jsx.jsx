// 1
import { useRef, forwardRef } from "react";

export default function ManipulatingTheDOMWithRefs() {
  // 1
  const inputRef = useRef(null);

  function focus() {
    inputRef.current.focus();
  }

  // 3
  const childRef = useRef(null);

  function focusChild() {
    childRef.current.focus();
  }

  // 2
  let catList = [];

  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      imageUrl: "https://placekitten.com/250/200?image=" + i,
    });
  }

  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  // 4

  const Child = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
  });

  return (
    <div className="wrapper">
      <h1>Manipulating the DOM with Refs</h1>

      <p>
        (1) We can use ref to reference to a DOM node and perform some actions
        that we need.
      </p>

      <p>
        Using useRef for a list of items, that we don't know the number. One way
        is to use a ref to a DOM parent element, then use querySelectorAll for
        example, but it is not a perfect solution. The other way is to pass
        function to the ref attribute:
        <b>ref callback</b> (2)
      </p>

      <p>
        (3) React doesn't allow to access the DOM elements of another component,
        event an element of its own child. That's for a reason, the code will be
        more fragile in such a case.
      </p>

      <p>
        (4) If we want to expose the DOM of our components we need to explicitly
        set that. So, the component specify that it forwards its ref to one of
        its children.
      </p>

      <p>Refs best practices:</p>
      <ul>
        <li>Avoid changing DOM nodes managed by React.</li>
        <li>
          However, this doesn't mean that we cannot do it at all. We can safely
          modify parts of the DOM that React has no reason to update.
        </li>
      </ul>

      {/* 1 */}
      <input ref={inputRef} />
      <button onClick={focus}>change name</button>

      {/* 3 */}

      <Child ref={childRef} />
      <button onClick={focusChild}>focus child</button>

      {/* 2 */}
      <div className="wrapper">
        <button onClick={() => scrollToId(0)}>to 0</button>
        <button onClick={() => scrollToId(4)}>to 4</button>
        <button onClick={() => scrollToId(8)}>to 8</button>
      </div>
      <div className="cats">
        {catList.map((cat) => (
          <div
            className="cat"
            key={cat.id}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(cat.id, node);
              } else {
                map.delete(cat.id);
              }
            }}
          >
            <img src={cat.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 3

function Child() {
  return (
    <div className="wrapper">
      <h2>(3)Child element</h2>
      <input />
    </div>
  );
}
