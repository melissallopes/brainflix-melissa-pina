import React, { Component } from "react";
import NavImg from "../assets/images/Mohan-muruge.jpg";
import iconLikes from "../assets/icons/SVG/likes.svg";
import iconViews from "../assets/icons/SVG/views.svg";

class Comments extends React.Component {
  render() {
    const mainVideo = this.props.mainVideo;
    const handleChange = this.props.handleChange;
    const handleSubmit = this.props.handleSubmit;
    const newComment = this.props.newComment.requiredProperties;

    const commentsList = mainVideo.comments.map(comments => {
      return (
        <div className="div__comment" key={comments.id}>
          <div className="div__comment-name-and-time">
            <button className="div__comment-avatar"></button>
            <h2 className="div__comment-name">{comments.name}</h2>
            <h2 className="div__comment-timestamp">
              {timeDiffer(comments.timestamp)}
            </h2>
          </div>
          <p className="div__comment-com">{comments.comment}</p>
        </div>
      );
    });

    return (
      <div>
        <div className="comments__main">
          <h1 className="comments__main__video-title">{mainVideo.title}</h1>
          <div className="comments__main__video-wrap">
            <div className="comments__main__video-mix">
              <h2 className="comments__main__video-subtitle">
                {mainVideo.channel}
              </h2>
              <h2 className="comments__main__video-date">
                {timeDiffer(mainVideo.timestamp)}
              </h2>
            </div>
            <div className="comments__main__video-box">
              <div className="comments__main__video-icon-views">
                <img
                  className="comments__main__video-icons"
                  src={iconViews}
                  alt="img"
                ></img>
                <p>{mainVideo.views}</p>
              </div>
              <div className="comments__main__video-icon-likes">
                <img
                  className="comments__main__video-icons"
                  src={iconLikes}
                  alt="img"
                ></img>
                <p>{mainVideo.likes}</p>
              </div>
            </div>
          </div>
          <div className="comments__main__video-text-div">
            <p className="comments__main__video-text">
              {mainVideo.description}
            </p>
          </div>
        </div>
        <div className="comments__form">
          <h2 className="comments__title">3 Comments</h2>

          <div className="comments__input-box">
            <img className="comments__side-img" src={NavImg} alt="img"></img>
            <div className="comments__input">
              <div className="comments__com-and-label">
                <label className="comments__input-label">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  className="comments__text-area"
                  value={newComment}
                  onChange={handleChange}
                  placeholder="Add a comment"
                ></textarea>
              </div>
              <button className="comments__button" onClick={handleSubmit}>
                COMMENT
              </button>
            </div>
          </div>
          <div className="comments__area">{commentsList}</div>
        </div>
      </div>
    );
  }
}

export default Comments;

function timeDiffer(timestamp) {
  var today = new Date();
  var current = today.getTime();

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - timestamp;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " year ago";
  }
}
