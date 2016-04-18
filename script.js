document.addEventListener("DOMContentLoaded", init, false);

function init () {
    document._video = document.getElementById("video");
    // buttons
    document._play = document.getElementById("play");
    document._slider = document.getElementById("slider");

    // audio elements
    document._audio = [];
    document._audio[0] = document.getElementById("audio0");
    document._audio[1] = document.getElementById("audio1");
    document._audio[2] = document.getElementById("audio2");

    // faders
    document._fader = [];
    document._fader[0] = document.getElementById("fader0");
    document._fader[1] = document.getElementById("fader1");
    document._fader[2] = document.getElementById("fader2");

    document._video.onloadedmetadata = function() {
        document._slider.max = document._video.duration;
    };
    document._video.ontimeupdate = function(a, b) {
        document._slider.value = document._video.currentTime;
    }
}

function switchVideo(n) {
   switch (n) {
        case 0:
            document._video.setAttribute("src", "example.mp4");
            break;
        case 1:
            document._video.setAttribute("src", "http://media.w3.org/2010/05/video/movie_300.webm");
            break;
   }
}

var playing = false;
function togglePlay() {
    if (playing) {
        document._play.innerHTML = "Play";
        pauseAll();
        playing = false;
    } else {
        document._play.innerHTML = "Pause"
        playAll();
        playing = true;
    }
}

function playAll() {
    document._video.play();
    document._audio[1].play();
    document._audio[2].play();
}

function pauseAll() {
    document._video.pause();
    document._audio[1].pause();
    document._audio[2].pause();
}

function seek() {
    var val = document._slider.value;
    //document._video.seekable.start(0);  // Returns the starting time (in seconds)
    document._video.currentTime = val;
    document._audio[1].currentTime = val
    document._audio[2].currentTime = val;
    //document._video.played.end(0);  // Returns the number of seconds the browser has played
}

function vol(val) {
    document._audio[val].volume = document._fader[val].value;
}
