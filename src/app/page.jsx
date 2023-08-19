"use client";

import "../styles/styles.css";

import RespondingToEvents from "./pages/RespondingToEvents";
import State from "./pages/State";
import RenderAndCommit from "./pages/RenderAndCommit";
import StateAsASnapshot from "./pages/StateAsASnapshot";
import QueueingASeriesOfStateUpdates from "./pages/QueueingASeriesOfStateUpdates.jsx";
import UpdatingObjectsInState from "./pages/UpdatingObjectsInState";
import UpdatingArraysInState from "./pages/UpdatingArraysInState";

export default function Home() {
  // Topic: Responding to Events
  const message = "Leonardo is here!";
  // ---------------------------------

  return (
    <main>
      {/* <RespondingToEvents message={message} /> */}
      {/* <State /> */}
      {/* <RenderAndCommit /> */}
      {/* <StateAsASnapshot /> */}
      {/* <QueueingASeriesOfStateUpdates /> */}
      {/* <UpdatingObjectsInState /> */}
      <UpdatingArraysInState />
    </main>
  );
}
