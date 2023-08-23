// 1
import { useRef } from "react";

export default function ManipulatingTheDOMWithRefs() {
  // 1
  const inputRef = useRef(null);

  function focus() {
    inputRef.current.focus();
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

      {/* 1 */}
      <input ref={inputRef} />
      <button onClick={focus}>change name</button>

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
