import React, { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import File from "./components/File";

import EuroBets from "./components/euro-bets/EuroBets";
import Popo from "./components/stuffed-animals/Popo";
import { AppStateProvider } from "./store/AppState";
import { AppReducer } from "./store/AppReducer";
import me from "./me.jpeg";
import DesktopIcon from "./components/DesktopIcon";
import BottomBar from "./components/BottomBar";

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

          <Panel id="projects">
            <DesktopIcon icon="app" text="eurobets" id="eurobets" />
          </Panel>

          <div className="desktop-icons">
            <DesktopIcon icon="doc" text="about" id="about" />
            <DesktopIcon icon="doc" text="experience" id="experience" />
            <DesktopIcon icon="doc" text="skills" id="skills" />
            <DesktopIcon icon="pic" text="me" id="me" />
            <DesktopIcon icon="folder" text="projects" id="projects" />
          </div>
          <div className="empty"></div>
        </div>
        <div className="bottom-bar">
          <BottomBar />
        </div>
      </div>
    </AppStateProvider>

    // <div>
    //   <div className="app">
    //     <div className="flexbox-left">
    //       <Panel title={title}>
    //         <About title={title} />
    //       </Panel>
    //     </div>
    //     <div className="flexbox-right">
    //       <div className="flexbox-right-top">
    //         <Panel
    //           title="me.jpg"
    //           content={<img src={me} width="100%" height="100%" alt="me" />}
    //         />
    //       </div>
    //       <div className="flexbox-right-bottom">
    //         <Panel
    //           title="files"
    //           content={
    //             <div>
    //               <File
    //                 title="about.txt"
    //                 setTitle={setTitle}
    //                 selected={title === "about.txt"}
    //               />
    //               <File
    //                 title="experience.txt"
    //                 setTitle={setTitle}
    //                 selected={title === "experience.txt"}
    //               />
    //               <File
    //                 title="skills.txt"
    //                 setTitle={setTitle}
    //                 selected={title === "skills.txt"}
    //               />
    //             </div>
    //           }
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <br />
    //   <br />

    // {/* <div className="full-screen">
    //   <Panel
    //     title="eurobets.png"
    //     content={<EuroBets title="hello"></EuroBets>}
    //   />
    // </div> */}

    // {/* <div className="full-screen">
    //   <Popo />
    // </div> */}
    // </div>
  );
}

export default App;
