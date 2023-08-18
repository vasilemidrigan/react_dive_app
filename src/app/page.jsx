"use client";

import { useState } from "react";

import "../styles/styles.css";

import Gallery from "./pages/Gallery";
import RespondingToEvents from "./pages/RespondingToEvents";

export default function Home() {
  // Topic: Responding to Events
  const message = "Leonardo is here!";
  // ---------------------------------

  return (
    <main>
      <Gallery term="Scientists" />
      <RespondingToEvents message={message} />
    </main>
  );
}
