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
      <b>The problem with passing props</b>
      <br />
    </div>
  );
}
