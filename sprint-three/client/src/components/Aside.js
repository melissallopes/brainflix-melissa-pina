import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aside extends React.Component {
  render() {
    const AsideInfo = this.props.AsideInfo;

    const mapVideos = AsideInfo.map(info => {
      return (
        <div className="aside__next-videos" key={info.id}>
          <Link to={`/${info.id}`} className="aside__link--no-decoration">
            <img className="aside__photos" src={info.image} alt="img"></img>

            <div className="aside__div-titles">
              <h3 className="aside__descript">{info.title}</h3>
              <p className="aside__text">{info.channel}</p>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div className="aside">
        <h2 className="aside__main-title">NEXT VIDEO</h2>
        <div className="aside__map-videos">{mapVideos}</div>
      </div>
    );
  }
}

export default Aside;
