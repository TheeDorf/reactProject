import React, { useState, useEffect } from "react";

function FilmsList() {
    const [list, setList] = useState([]);

    
    function getFilms(){
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((response)=> {return response.json()})
        .then((data) => {setList(data)})
        .catch((error) => {console.log(error)});
    };
    
    useEffect(() => {
        getFilms();
      }, []);
    

      return (
        <div>
          <h1>Studio Ghibli Films</h1>
          <ul>
            {list.map((film) => {
              return <li key={film.id}>{film.title}</li>;
            })}
          </ul>
        </div>
      );
    }
    




export default FilmsList