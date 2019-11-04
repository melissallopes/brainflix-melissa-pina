import React, { Component } from "react";

class Aside extends React.Component {
  render() {
    const AsideInfo = this.props.AsideInfo;

    const mapVideos = AsideInfo.map(info => {
      return (
        <div className="aside__next-videos" key={info.id}>
          <img className="aside__photos" src={info.image} alt="img"></img>
          <div className="aside__div-titles">
            <h3 className="aside__descript">{info.title}</h3>
            <p className="aside__text">{info.name}</p>
          </div>
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
