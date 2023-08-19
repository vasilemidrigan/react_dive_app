export default function ReactingToInputWithState() {
  return (
    <div className="wrapper">
      <h1>Reacting to Input with State</h1>

      <p>
        React provides a declarative way to manipulate the UI. Instead of
        manipulating individual pieces of the UI, you describe the different
        states in which the component can be, and switch between them in
        accordance with the user input.
      </p>

      <b>How declarative UI compares with imperative</b>

      <p>
        Imperative UI programming is all about writing a tone of instructions,
        all the little details. Imagine you are into a taxi and you need to
        literally say how to get to Central Park to the taxist.
      </p>
      <p>
        Declarative UI on the other hand don't need deep instructions, we just
        need to declare what we need, and React will figure it out for us. So
        the taxist knows how to get to the Central Park, and chances are he
        knows better than us.
      </p>

      <b>Thinking about UI declaratively</b>

      <ol>
        <li>
          <b>Identify </b> your component's different visual states
        </li>
        <li>
          <b>Determine</b> what triggers those state changes the event handlers
          to set the state
        </li>
        <li>
          <b>Represent</b> the state in memory using useState
        </li>
        <li>
          <b>Remove</b> any non-essential state variables
        </li>
        <li>
          <b>Connect</b> the event handlers to set the state
        </li>
      </ol>

      <b>Identify your component's different visual states</b>

      <p>
        First, you need to visualize all the different states of the UI the user
        might see:
        <b>Empty:</b> Form has a disabled submit button
        <b>Typing:</b> Form has an enabled Submit button
        <b>Submitting:</b> Form is completely disabled. Spinner is shown.
        <b>Success:</b> Thank you message is shown istead of a form
        <b>Error:</b> Same as Typing state, but with an extra error message.
      </p>

      <p>
        (1) We can use a prop and set it to error, success, submiting, etc. And
        implement the mock for this particular state. So this approach is called
        Mocking, which let's you quickly iterate over the UI before wire any
        logic.
      </p>
      <p>
        We can even use many visual states at once, so what we need for that is
        an array of strings, which are basically the visual state name, for
        example error, or success, and into our component we are mapping through
        the array and generate a div with all visual statuses from the array so
        we have the same div illustrated in different visual states, this is
        called living styleguides or storybooks.
      </p>

      <b>Determine what triggers those state changes</b>

      <p>
        We can trigger state updates by human input and computer input like
        network response arriving or timeout completing, etc.
      </p>
      <p>
        So we can visualize a flow of state updates during the human and
        computer inputs, like: state=empty (user starts typing) state=typing
        (user press submit) state=submitting (network error) state=error OR
        (network success) state=success
      </p>

      <b>Represent the state in memory with useState</b>

      <p>
        Keep simplicity when implementing states, add only states that
        absolutely must be there. We don't need complexity if we can have it
        simple.
      </p>
      <p>
        If we don't know the best way, we can just add enough states that cover
        all possible visual states, and then correct them if we need. Refact
        states is a part of the process.
      </p>

      <b>Remove any non-essential state variables</b>

      <p>
        You want to avoid duplication in the state content, se you're only
        tracking what is essential.
      </p>
      <p>
        Your goal is to prevent states that doesn't represent any valid UI that
        you want a user to see.
      </p>

      <b>Some questions to ask about state variables:</b>
      <p>
        Does this state cause a paradox? For example isTyping and isSubmitting
        can't be both true, so we need to remove the imposible state.
      </p>
      <p>
        Is the same information available in another state variable already?
        There can be a state variable that has this information so we don't need
        to create another one, for example instead of isEmpty we can check if
        answer.length === 0.
      </p>
      <p>
        Can you get the information from the inverse of another state variable?
        isError is not needed because you can check error !== null instead.
      </p>

      <b>Connect the event handlers to set state</b>

      <p></p>

      {/* 1 */}

      <Section status="error" />
    </div>
  );
}

function Section({ status }) {
  if (status == "empty") {
    return <h3>Wellcome</h3>;
  } else if (status == "error") {
    return (
      <h3 style={{ color: "red", border: "1px solid red" }}>
        Error: an error is catched
      </h3>
    );
  }
}
