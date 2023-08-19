export default function RenderAndCommit() {
  return (
    <div className="wrapper">
      <h1>Render and Commit</h1>

      <p>
        Before the components are displayed on the screen, they must be render
        by React.
      </p>
      <p>
        We can say that React is the waiter who puts in requests from customers
        and brings them their orders.
      </p>
      <p>The process of requesting and serving UI has three steps:</p>
      <ul>
        <li>Triggering a render</li>
        <li>Rendering the component</li>
        <li>Commiting to the DOM</li>
      </ul>

      <hr />

      <p>Step 1: Trigger a render</p>
      <p>There are two reasons for a component to render:</p>
      <ol>
        <li>The component initial render</li>
        <li>The component or it's ancestor's state has been updated</li>
      </ol>

      <p>
        When the app starts, it triggers the inital render with the
        createRoot(document.getElementById("id"));
      </p>
      <p>Then it re-renders when there is updates with set functions.</p>

      <hr />

      <p>Step 2: React renders your components</p>
      <p>Rendering is React calling your components.</p>
      <p>On initial render, React will call the root component.</p>
      <p>
        For subsequent renders, React will call the function component whose
        state update triggered the render. The process is recursive, so it will
        call all nested components untill it makes sure it will display all the
        information updated.
      </p>

      <p>Step 3: React commits changes to the DOM</p>
      <p>
        For the initial render, React will use appendChild() DOM API to put all
        the DOM nodes it has created on the screen.
      </p>
      <p>
        For re-renders, it will make minimal necessary operations to make the
        DOM match the latest rendering output.
      </p>
      <p>
        React only changes the DOM nodes if there's a difference between
        renders, so it will update an h1 for example if it changed, and leave an
        h2 for example if it is the same as it was in the previous render.
      </p>
    </div>
  );
}
