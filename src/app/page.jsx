"use client";

import "../styles/styles.css";

// Adding Interactivity
import RespondingToEvents from "./pages/AddingInteractivity/RespondingToEvents";
import State from "./pages/AddingInteractivity/State";
import RenderAndCommit from "./pages/AddingInteractivity/RenderAndCommit";
import StateAsASnapshot from "./pages/AddingInteractivity/StateAsASnapshot";
import QueueingASeriesOfStateUpdates from "./pages/AddingInteractivity/QueueingASeriesOfStateUpdates.jsx.jsx";
import UpdatingObjectsInState from "./pages/AddingInteractivity/UpdatingObjectsInState";
import UpdatingArraysInState from "./pages/AddingInteractivity/UpdatingArraysInState";

// Managing State
import ReactingToInputWithState from "./pages/ManagingState/ReactingToInputWithState";

export default function Home() {
  // Topic: Responding to Events
  const message = "Leonardo is here!";
  // ---------------------------------

  return (
    <main>
      {/* Adding Interactivity */}

      {/* <RespondingToEvents message={message} /> */}
      {/* <State /> */}
      {/* <RenderAndCommit /> */}
      {/* <StateAsASnapshot /> */}
      {/* <QueueingASeriesOfStateUpdates /> */}
      {/* <UpdatingObjectsInState /> */}
      {/* <UpdatingArraysInState /> */}

      {/* Managing State */}

      <ReactingToInputWithState />
    </main>
  );
}
