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
import ChoosingTheStateStructure from "./pages/ManagingState/ChoosingTheStateStructure";
// import SharingStateBetweenComponents from "./pages/ManagingState/SharingStateBetweenComponents";
import PreservingAndResetingState from "./pages/ManagingState/PreservingAndResettingState";
import ExtractStateLogicIntoAReducer from "./pages/ManagingState/ExtractingStateLogicIntoAReducer";
import PassingDataDeeplyWithContext from "./pages/ManagingState/PassingDataDeeplyWithContext";
import ScalingUpWithReducerAndContext from "./pages/ManagingState/ScalingUpWithReducerAndContext";
import FakeContext from "./pages/ManagingState/contextAndReducerSeparately/FakeContext";
import FakeApp from "./pages/ManagingState/contextAndReducerSeparately/fakeApp";
import FakeChild from "./pages/ManagingState/contextAndReducerSeparately/fakeChild";

// Escape Hatches
import ReferencingValuesWithRefs from "./pages/EscapeHatches/ReferencingValuesWithRefs";
import ManipulatingTheDOMWithRefs from "./pages/EscapeHatches/ManipulatingTheDOMWithRefs.jsx";
import SynchronizingWithEffects from "./pages/EscapeHatches/SynchronizingWithEffects";

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

      {/* <ReactingToInputWithState /> */}
      {/* <ChoosingTheStateStructure /> */}
      {/* <SharingStateBetweenComponents /> */}
      {/* <PreservingAndResetingState /> */}
      {/* <ExtractStateLogicIntoAReducer /> */}
      {/* <PassingDataDeeplyWithContext /> */}
      {/* <ScalingUpWithReducerAndContext /> */}

      {/* <FakeContext>
        <FakeApp>
          <FakeChild />
        </FakeApp>
      </FakeContext> */}

      {/* Escape Hatches */}

      {/* <ReferencingValuesWithRefs /> */}
      {/* <ManipulatingTheDOMWithRefs /> */}
      <SynchronizingWithEffects />
    </main>
  );
}
