import React, { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import File from "./components/File";

import EuroBets from "./components/EuroBets";
import me from "./me.jpg";
import Popo from "./components/Popo";
import { AppStateProvider } from "./store/AppState";
import { AppReducer } from "./store/AppReducer";

function App() {
  return (
    <AppStateProvider reducer={AppReducer}>
      <div className="app">
        <Panel id="about">
          <About />
        </Panel>

        <Panel id="experience">
          <Experience />
        </Panel>

        <Panel id="skills">
          <Skills />
        </Panel>
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
