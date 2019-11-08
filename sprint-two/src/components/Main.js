import React, { Component } from "react";

class Main extends React.Component {
  render() {
    const proxy = "cors-anywhere.herokuapp.com";
    const mainVideo = `${proxy}${this.props.mainVideo}`;

    return (
      <div className="main__video">
        <div className="main__video-poster">
          <video
            className="main__video-video"
            src={mainVideo.video}
            controls
            poster={mainVideo.image}
          ></video>
        </div>
      </div>
    );
  }
}

export default Main;
