import { useState } from "react";
import "./App.css";
import { InputMenu } from "./components/InputMenu";
import OutputContent from "./components/OutputContent";
import { emptyData } from "./styles/initialData";

function App() {
  const [resumeData, setResumeData] = useState(emptyData);
  const [darkMode, setDarkMode] = useState(false);
  const editResumeData = (newData) => setResumeData(newData);
  return (
    <>
      <div className="app" data-theme={darkMode ? "dark" : "light"}>
        <header className="glass-card">
          <h1>Resume Generator</h1>
          <button
            className="theme-mode"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {!darkMode ? "🌑" : "☀️"}
          </button>
        </header>
        <div className="main-content">
          <InputMenu handleChange={editResumeData} resumeData={resumeData} />
          <OutputContent resumeData={resumeData} />
        </div>
        <footer className="glass-card">
          ~ Developed by YESHWIN / ODIN JS 2024 ~
        </footer>
      </div>
    </>
  );
}

export default App;
