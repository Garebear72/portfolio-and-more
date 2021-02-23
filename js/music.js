let canvasWidth = 500;
let audioEl = document.getElementById("audio");
let canvas = document.getElementById("progress").getContext('2d');
let ctrl = document.getElementById("audioControl");

audioEl.addEventListener('loadedmetadata', function(){
    let duration = audioEl.duration;
    let currentTime = audioEl.currentTime;
    document.getElementById("duration").innerHTML = convertElapsedTime(duration);
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime);
    canvasWidth.fillRect(0, 0, canvasWidth, 50);
});

function convertElapsedTime(inputSeconds) {
    let seconds = Math.floor(inputSeconds % 60)
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let minutes = Math.floor(inputSeconds / 60)
    return minutes + ":" + seconds;
};

function togglePlaying() {

    let play = ctrl.innerHTML === 'Play';
    let method;

    if (play) {
        ctrl.innerHTML = "Pause";
        method = 'play';
    } else {
        ctrl.innerHTML = "Play";
        method = 'pause';
    }

    audioEl[method]();
}

function updateBar() {
    canvas.clearRect(0, 0, canvasWidth, 50);
    canvas.fillStyle = "#000";
    canvas.fillRect(0, 0, canvasWidth, 50);

    let currentTime = audioEl.currentTime;
    let duration = audioEl.duration;

    if (currentTime === duration) {
        ctrl.innerHTML = "Play";
    }

    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime);

    let percentage = currentTime / duration;
    let progress = (canvasWidth * percentage);
    canvas.fillStyle = "#FF0000";
    canvas.fillRect(0, 0, progress, 50);
}

updateBar();