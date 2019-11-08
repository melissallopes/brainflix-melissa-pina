import React, { Component } from "react";

import Main from "./Main";
import Aside from "./Aside";
import Comments from "./Comments";
import axios from "axios";

class Content extends React.Component {
  state = {
    AsideInfo: undefined,
    mainVideo: undefined
  };

  render() {
    if (this.state.mainVideo) {
      return (
        <div>
          <Main mainVideo={this.state.mainVideo} />
          <div className="section-divisor">
            <Comments mainVideo={this.state.mainVideo} />
            <Aside AsideInfo={this.state.AsideInfo} />
          </div>
        </div>
      );
    } else return <div>Loading...</div>;
  }

  componentDidMount() {
    const APIurl = "https://project-2-api.herokuapp.com";
    const APIkey = "?api_key=062177a7-15a0-49cf-9325-6ebd2e9b39ad";

    axios.get(`${APIurl}/videos${APIkey}`).then(response => {
      this.setState({
        AsideInfo: response.data
      });

      axios.get(`${APIurl}/videos/${this.props.id}${APIkey}`).then(response => {
        this.setState({
          mainVideo: response.data
        });
      });
    });
  }

  componentDidUpdate(previous) {
    const APIurl = "https://project-2-api.herokuapp.com";
    const APIkey = "?api_key=062177a7-15a0-49cf-9325-6ebd2e9b39ad";

    const filtered = this.state.AsideInfo.findIndex(video => {
      return video.id === this.props.id;
    });

    if (this.state.mainVideo) {
      const newMain = {
        id: this.state.mainVideo.id,
        title: this.state.mainVideo.title,
        channel: this.state.mainVideo.channel,
        image: this.state.mainVideo.image
      };
      this.state.AsideInfo.push(newMain);
    }

    this.state.AsideInfo.splice(filtered, 1);

    if (this.props !== previous) {
      axios.get(APIurl + "/videos/" + this.props.id + APIkey).then(response => {
        this.setState({
          mainVideo: response.data,
          AsideInfo: this.state.AsideInfo
        });
      });
    }
  }
}

export default Content;
