import React, { Component } from "react";

import Main from "./Main";
import Aside from "./Aside";
import Comments from "./Comments";
import axios from "axios";

class Content extends React.Component {
  state = {
    AsideInfo: undefined,
    mainVideo: undefined,
    cut: undefined,
    newComment: {
      name: "",
      comment: ""
    }
  };

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const APIurl = "https://project-2-api.herokuapp.com";
    const APIkey = "?api_key=062177a7-15a0-49cf-9325-6ebd2e9b39ad";

    //  const value = {value: this.state.value}

    axios
      .post(APIurl + "/videos/" + this.props.id + "/comments" + APIkey, {
        newComment: this.state.newComment
      })
      .then(response => {
        this.setState({
          newComment: response
        });
      });
    if (this.state.newComment) {
      this.state.mainVideo.unshift(this.state.newComment);
    }
  };

  // value:

  render() {
    if (this.state.mainVideo) {
      return (
        <div>
          <Main mainVideo={this.state.mainVideo} />
          <div className="section-divisor">
            <Comments
              mainVideo={this.state.mainVideo}
              newComment={this.state.newComment}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
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

    //pushing main video back to AsideInfo array before filter
    if (this.state.mainVideo) {
      this.state.cut = this.state.mainVideo;
      this.state.AsideInfo.push(this.state.cut);
    }

    //filtering to select all videos except the main
    this.state.AsideInfo = this.state.AsideInfo.filter(video => {
      return video.id !== this.props.id;
    });

    if (this.props !== previous) {
      axios.get(APIurl + "/videos/" + this.props.id + APIkey).then(response => {
        this.setState({
          mainVideo: response.data,
          AsideInfo: this.state.AsideInfo
        });
      });
    }

    // handleSubmit = event => {
    //   event.preventDefault();

    //   //  const value = {value: this.state.value}

    //   axios
    //     .post(APIurl + "/videos/" + this.props.id + "/comments" + APIkey, {
    //       newComment: this.state.newComment
    //     })
    //     .then(response => {
    //       this.setState({
    //         newComment: response
    //       });
    //     });
    // };
  }
}

export default Content;

// const filtered = this.state.AsideInfo.findIndex(video => {
//   return video.id === this.props.id;
// });

// if (this.state.mainVideo) {
//   this.state.cut = this.state.mainVideo;
//   this.state.AsideInfo.push(this.state.cut);
// }

// this.state.AsideInfo.splice(filtered, 1);
