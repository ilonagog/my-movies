import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (

    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <h1>Hi</h1>

    </div>
  );
}

export default App;
