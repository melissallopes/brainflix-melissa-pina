import React, { Component } from "react";
import videoImg from "../assets/images/video-list-0.jpg";

class Main extends React.Component {
  render() {
    const mainVideo = this.props.mainVideo;

    return (
      <div className="main__video">
        <div className="main__video-poster">
          <video
            className="main__video-video"
            src={mainVideo.video}
            controls
            poster={videoImg}
          ></video>
        </div>
      </div>
    );
  }
}

export default Main;
