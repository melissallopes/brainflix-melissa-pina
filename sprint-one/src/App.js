import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Comments from "./components/Comments";
import video from "./assets/video/BrainStation Sample Video.mp4";

import imgOne from "./assets/images/video-list-1.jpg";
import imgTwo from "./assets/images/video-list-2.jpg";
import imgThree from "./assets/images/video-list-3.jpg";
import imgFour from "./assets/images/video-list-4.jpg";
import imgFive from "./assets/images/video-list-5.jpg";
import imgSix from "./assets/images/video-list-6.jpg";
import imgSeven from "./assets/images/video-list-7.jpg";
import imgEight from "./assets/images/video-list-8.jpg";

const AsideInfo = [
  {
    image: imgOne,
    title: "Become A Travel Pro In One Easy Lesson...",
    name: "Scotty Cranmer",
    id: 1
  },
  {
    image: imgTwo,
    title: "Les Houches The Hidden Gem Of The Chamonix",
    name: "Cornelia Blair",
    id: 2
  },
  {
    image: imgThree,
    title: "Travel Health Useful Medical Information For",
    name: "Glen Harper",
    id: 3
  },
  {
    image: imgFour,
    title: "Cheap Airline Tickets Great Ways To Save",
    name: "Emily Harper",
    id: 4
  },
  {
    image: imgFive,
    title: "Take A Romantic Break In A Boutique Hotel",
    name: "Ethan Owen",
    id: 5
  },
  {
    image: imgSix,
    title: "Choose The Perfect Accommodations",
    name: "Lydia Perez",
    id: 6
  },
  {
    image: imgSeven,
    title: "Cruising Destination Ideas",
    name: "Timothy Austin",
    id: 7
  },
  {
    image: imgEight,
    title: "Train Travel On Track For Safety",
    name: "Scotty Cranmer",
    id: 8
  }
];

const commentsInfo = [
  {
    name: "Micheal Lyons",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.",
    timestamp: "1530744338878",
    id: 1
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    timestamp: "1530744338878",
    id: 2
  },
  {
    name: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    timestamp: "1530744138878",
    id: 3
  }
];

const mainVideo = {
  title: "BMX Rampage: 2018 Highlights",
  description:
    "On a gusty day in Southern Utah, a group of 25 daring moutntain bikers belw the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mothe nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the secon time--eight years agter his first Red Cow Rampage title",
  channel: "Red Cow",
  image: "poster",
  views: "1,001,023",
  likes: "110,985",
  duration: "20s",
  video: video,
  timestamp: "1530744338878",
  comments: commentsInfo
};

class App extends React.Component {
  state = {
    AsideInfo: AsideInfo,
    mainVideo: mainVideo
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Main mainVideo={this.state.mainVideo} />
          <div className="section-divisor">
            <Comments
              // commentsInfo={this.state.commentsInfo}
              mainVideo={this.state.mainVideo}
            />
            <Aside AsideInfo={this.state.AsideInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
