var artwork = document.getElementsByClassName("artwork");
var title = document.getElementsByClassName("title");
var artist = document.getElementsByClassName("artist");
var progress = document.getElementsByClassName("progress");
var prev_btn = document.getElementById("prev");
var svg_play = document.getElementById("play");
var svg_pause = document.getElementById("pause");
var next_btn = document.getElementsByClassName("next");
var progress_vol = document.getElementsByClassName("progress_vol");

var audio = new Audio("../audio/audio1.mp3");

var trackTime = 0;

setInterval(() => {
  trackTime = audio.currentTime;
  if (trackTime >= audio.duration) {
    trackTime = 0;
    svg_play.style.display = "block";
    svg_pause.style.display = "none";
  }
  progress[0].value = trackTime / audio.duration;
}, 1);

const set_time = (val) => {
  audio.currentTime = val * audio.duration;
};

const play_pause = () => {
  if (svg_play.style.display === "none") {
    svg_play.style.display = "block";
    svg_pause.style.display = "none";
    audio.pause();
  } else {
    svg_play.style.display = "none";
    svg_pause.style.display = "block";
    audio.play();
  }
};

const b_forward = (a) => {
  audio.currentTime = audio.currentTime + a;
};

const volume = (val) => {
  audio.volume = val / 100;
  // console.log("===============ll", audio.volume);
};
