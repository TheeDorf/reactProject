import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages";


function App(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path= "film/:id" element={<SingleFilmPage />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <NavLink to="/"></NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      {/* <div className="App">
  

        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div> */}
    </Router>
  );
}
export default App;
