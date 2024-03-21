import React, { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

import EuroBets from "./components/euro-bets/EuroBets";
import { AppStateProvider } from "./store/AppState";
import { AppReducer } from "./store/AppReducer";
import me from "./me.jpeg";
import DesktopIcon from "./components/DesktopIcon";
import ExternalLink from "./components/ExternalLink";
import BottomBar from "./components/BottomBar";
import TemporaryAbout from "./components/TemporaryAbout";

function App() {
  return (
    <AppStateProvider reducer={AppReducer}>
      <div className="app">
        <div className="main-area">
          <Panel id="about">
            <About />
          </Panel>

          <Panel id="experience">
            <Experience />
          </Panel>

          <Panel id="skills">
            <Skills />
          </Panel>
          <Panel id="me">
            <img src={me} alt="me" width="300px" />
          </Panel>

          <Panel id="eurobets">
            <EuroBets />
          </Panel>

          <Panel id="experiments">
            <DesktopIcon icon="app" text="eurobets" id="eurobets" />
          </Panel>

          <Panel id="tempabout">
            <TemporaryAbout />
          </Panel>

          <div className="desktop-icons">
            <DesktopIcon icon="doc" text="about" id="about" />
            <DesktopIcon icon="doc" text="experience" id="experience" />
            <DesktopIcon icon="doc" text="skills" id="skills" />
            <DesktopIcon icon="pic" text="me" id="me" />
            <DesktopIcon icon="folder" text="experiments" id="experiments" />
            <ExternalLink
              link="https://drive.google.com/file/d/1pS0ZAeNyblsOIgETLTb5xC9PkUM5ysSZ/view?usp=sharing"
              text="resume"
            />
          </div>
          <div className="empty"></div>
        </div>
        <div className="bottom-bar">
          <BottomBar />
        </div>
      </div>
    </AppStateProvider>
  );
}

export default App;
