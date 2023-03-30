import React, { useState, useEffect } from "react";
import FilmsList from "./Components/FilmsListFunctional";

function App (props){
const [list,setList]= useState(["ready","set","GO"]);
const [text,setText]= useState ("")


const onSubmit = (e)=> {
    e.preventDefault();
    setList([...list, text]);
    setText("")
}

return (
    <div className="App">
    <h1>Hello World</h1>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) =>
          setText( e.target.value,
          )
        }
      />
      <button type="submit">Submit</button>
    </form>
    <ul>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
    <FilmsList />
  </div>
);

}

export default App