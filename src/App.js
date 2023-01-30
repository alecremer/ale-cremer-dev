import './App.css';
import HomePage from './views/HomePage';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route element = { <HomePage/> }  path="/" />
      </Routes>
    </div>
  );
}

export default App;
