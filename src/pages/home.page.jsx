import React, { useState } from "react";
// import FilmsList from "./Components/FilmsListFunctional";
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import AboutMe from "./Components/AboutMe";


function HomePage(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  return (
   
      <div className="App">
        <h1>Learning React</h1>

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
      </div>
  );
}
export default HomePage;
