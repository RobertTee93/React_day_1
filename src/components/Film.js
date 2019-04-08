import React, { Component } from "react";
import "./Film.css"

class Film extends Component {
  render(){
    const { name, url } = this.props
    return (
      <div className="film">
        <li><a href={url} target="_blank">{ name }</a></li>
      </div>
    )
  }
}

export default Film;
