import React, { Component } from "react";

import Main from "./Main";
import Aside from "./Aside";
import Comments from "./Comments";
import axios from "axios";

class Content extends React.Component {
  state = {
    AsideInfo: undefined,
    mainVideo: undefined,
    newComment: {
      name: "",
      comment: ""
    }
  };

  render() {
    if (this.state.mainVideo) {
      return (
        <div>
          <Main mainVideo={this.state.mainVideo} />
          <div className="section-divisor">
            <Comments
              mainVideo={this.state.mainVideo}
              handleSubmit={this.handleSubmit}
            />
            <Aside AsideInfo={this.state.AsideInfo} />
          </div>
        </div>
      );
    } else return <div>Loading...</div>;
  }

  componentDidMount() {
    const APIurl = "http://localhost:5000/api";

    axios.get(`${APIurl}/videos`).then(response => {
      this.setState({
        AsideInfo: response.data
      });

      axios.get(`${APIurl}/videos/${this.props.id}`).then(response => {
        this.setState({
          mainVideo: response.data
        });
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const APIurl = "http://localhost:5000/api";

    //pushing main video back to AsideInfo array before filter

    if (this.props !== prevProps) {
      if (this.state.mainVideo) {
        this.setState({
          AsideInfo: [...this.state.AsideInfo, this.state.mainVideo[0]]
        });
      }
    }

    //filtering to select all videos except the main
    this.state.AsideInfo = this.state.AsideInfo.filter(video => {
      return video.id !== this.props.id;
    });

    // if statement to prevent 2 equal videos
    // this.state.AsideInfo = this.state.AsideInfo.filter(video => {
    //   return video.id
    // })

    if (
      this.props !== prevProps ||
      prevState.newComment !== this.state.newComment
    ) {
      axios.get(APIurl + "/videos/" + this.props.id).then(response => {
        this.setState({
          mainVideo: response.data,
          AsideInfo: this.state.AsideInfo
        });
      });
    }

    //posting comments

    this.handleSubmit = event => {
      event.preventDefault();
      const APIurl = "http://localhost:5000/api";

      axios
        .post(APIurl + "/videos/" + this.props.id + "/comments", {
          name: "",
          comment: event.target.inputComment.value
        })
        .then(response => {
          this.setState({
            newComment: response.data
          });
        });
    };
  }
}

export default Content;
