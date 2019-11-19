import React, { Component } from "react";
import { Link } from "react-router-dom";
import uploadImg from "../assets/images/Upload-video-preview.jpg";
import axios from "axios";

class Upload extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/videos", {
        id: "",
        title: event.target.inputTitle.value,
        channel: event.target.inputChannel.value
      })
      .then(response => {
        console.log(response);
      });
  };
  render() {
    return (
      <div className="upload">
        <h2 className="upload__title">Upload Video</h2>
        <div className="upload__div-huge">
          <div className="upload__div-video">
            <label className="upload__video-label">VIDEO THUMBNAIL</label>
            <img className="upload__img" src={uploadImg}></img>
          </div>
          <form className="upload__form" onSubmit={this.handleSubmit}>
            <div className="upload__input-name">
              <label className="upload__title-label">Title your video</label>
              <input
                className="upload__title-add"
                type="text"
                name="inputTitle"
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="upload__div-text">
              <label className="upload__text-label">
                Add a video description
              </label>
              <textarea
                className="upload__text-add"
                placeholder="Add a description of your video"
                name="inputChannel"
              ></textarea>
            </div>

            <div className="upload__div-button">
              <button className="upload__button-publish">PUBLISH</button>
              <button className="upload__button-cancel">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
