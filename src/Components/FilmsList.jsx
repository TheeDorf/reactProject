import React, { Component } from "react";

class FilmsList extends Component{
    constructor(props){
        super (props);{
           this.state = {
            list: []
           } ;
        }
    }

    
    getFilms(){
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((response)=> response.json())
        .then((data) => this.setState({list:data}))
        .catch((error) => console.log(error));
    }
    
    componentDidMount(){
        this.getFilms();
    }

    render(){
        return (
            <ul>
                 {this.state.list.map(film =>(
                    <li key={film.id}>
                        {film.title} 
                    </li>
                 ))}   
            </ul>
   );}
}




export default FilmsList