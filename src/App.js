import React from 'react';
import './App.css';
import Panel from './components/Panel';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import File from './components/File';
import me from './me.jpg';

function App() {
  
  const [title, setTitle] = React.useState("about.txt");

  var content;
  if (title == 'about.txt') {
    content = <About title={title} />
  } else if (title == 'experience.txt') {
    content = <Experience/>
  } else if (title == 'skills.txt') {
    content = <Skills/>
  }
  
  return (
    <div className="app">
      <div className="flexbox-left">
      <Panel
        title={title}
        content={content}
      />
      </div>
      <div className="flexbox-right">
        <div className="flexbox-right-top">
          <Panel
            title="me.jpg"
            content = {
              <img src={me} width="100%" height="100%" alt="me"/>
            }
          />
        </div>
        <div className="flexbox-right-bottom">
          <Panel
            title="files"
            content = {
              <div>
                <File title="about.txt" setTitle={setTitle}/>
                <File title="experience.txt" setTitle={setTitle}/>
                <File title="skills.txt" setTitle={setTitle}/>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
