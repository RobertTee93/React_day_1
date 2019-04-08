import React, { Component } from "react";
import Film from "./Film.js"
import "./FilmList.css"

class FilmList extends Component {
  render(){

    const filmNodes = this.props.data.map((film) => {
      return (
        <Film key={ film.id } name={ film.name } url={ film.url }></Film>
      )
    })

    return (
      <div className="film-list">
        <h2>Upcoming Film Releases for UK</h2>
        <hr/>
        { filmNodes }
        <hr/>
        <a className="view-more-btn" href="https://www.imdb.com/calendar/?region=gb" target="_blank"><p>View More Upcoming Releases >></p></a>
      </div>
    )
  }
}

export default FilmList;
