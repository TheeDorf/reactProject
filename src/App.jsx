import React, { Component } from "react";
import FilmsList from "./Components/FilmsList.jsx"


class App extends Component {
  render() {
    return (
      <div>
        <h1>Studio Ghibli Films</h1>
        <FilmsList />
      </div>
    );
  }
}
export default App;