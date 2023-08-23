import { useName, useDispatchName } from "./FakeContext";

export default function FakeChild() {
  const name = useName();
  const dispatch = useDispatchName();

  return (
    <>
      <input
        value={name}
        onChange={() =>
          dispatch({
            type: "change",
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "delete",
          })
        }
      >
        delete username
      </button>
    </>
  );
}
