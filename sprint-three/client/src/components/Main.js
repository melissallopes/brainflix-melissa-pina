import React, { Component } from "react";

class Main extends React.Component {
  render() {
    const mainVideo = this.props.mainVideo[0];

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
