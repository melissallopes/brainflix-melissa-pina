const express = require("express");
const router = express.Router();
const AsideVideo = __dirname + "/../../model/AsideVideo.json";
const mainVideo = __dirname + "/../../model/mainVideo.json";
let mainVideoDesc = require(mainVideo);
let videos = require(AsideVideo);
const helper = require("../../helper/helper");

//  Get all videos
router.get("/", (req, res) => {
  // console.log(req)
  res.json(videos);
});

//  Get video with :id
router.get("/:id", (req, res) => {
  const found = mainVideoDesc.some(video => video.id === req.params.id);
  //some returns a Boolean value
  if (found) {
    res.json(mainVideoDesc.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

//Upload new Video
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(videos),
    title: req.body.title,
    channel: req.body.channel,
    image:
      "https://storage.googleapis.com/triptease-website/wp/2015/04/beach-bus-holiday-1106.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    views: "1,264",
    likes: "938",
    duration: "12:30",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545377894000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  };
  if (!newVideo.title || !newVideo.channel) {
    return res.status(400).json({
      errorMessage:
        "Please provide name, description and video for uploading new video"
    });
  }
  videos.push(newVideo), mainVideoDesc.push(newVideo);

  helper.towriteJSONFile(AsideVideo, videos);
  helper.towriteJSONFile(mainVideo, mainVideoDesc);
  res.json(videos);
  res.json(mainVideoDesc);
});

router.post("/:id/comments", (req, res) => {
  const found = mainVideoDesc.some(video => video.id === req.params.id);
  if (found) {
    // res.json(mainVideoDesc.filter(video => video.id === req.params.id));

    today = new Date();
    const newComment = {
      name: "BrainStation man",
      comment: req.body.comment,
      timestamp: today.getTime()
    };

    const add = mainVideoDesc.find(video => video.id === req.params.id);

    add["comments"].push(newComment);

    mainVideoDesc.push(...mainVideoDesc, add);

    helper.towriteJSONFile(mainVideo, mainVideoDesc);
    res.json(mainVideoDesc);
  } else res.json("video id is not found");
});

module.exports = router;
