"use client";

import "../styles/styles.css";

import RespondingToEvents from "./pages/RespondingToEvents";
import State from "./pages/State";
import RenderAndCommit from "./pages/RenderAndCommit";
import StateAsASnapshot from "./pages/StateAsASnapshot";

export default function Home() {
  // Topic: Responding to Events
  const message = "Leonardo is here!";
  // ---------------------------------

  return (
    <main>
      {/* <RespondingToEvents message={message} /> */}
      {/* <State /> */}
      {/* <RenderAndCommit /> */}
      <StateAsASnapshot />
    </main>
  );
}
