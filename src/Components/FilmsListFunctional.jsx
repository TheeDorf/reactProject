
import { useState, useEffect } from "react"



export default function FilmsList(props){
    const [list, setList]= useState([]);

function getFilms(){
    fetch("https://studioghibliapi-d6fc8.web.app/films")
    .then((response)=> {return response.json()})
    .then((result)=>{
        console.log(result);
        setList(result);
    })
    .catch((error) => {console.log(error)});
}

useEffect(()=>{
    getFilms();
}, []);

return (
    <ul>
         {list.map(film =>(
            <li key={film.id}>
                {film.title} 
            </li>
         ))}   
    </ul>
);

}