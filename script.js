const video = document.getElementById('video');
const videoThumbnail = document.getElementById('thumbnail-image');

const playPause = document.getElementById('play-pause');
const forward = document.getElementById('skip-10');
const backward = document.getElementById('skip-minus-10');
const volume = document.getElementById('volume');
const muteButton = document.getElementById('mute');


const videoContainer = document.querySelector('.video-container');
const controls = document.querySelector('.controls');
const progressBar = document.querySelector('.progress-bar');
const playBackLine = document.querySelector('.playback-line');


const currentTime = document.getElementById('current-time');
const maxDuration = document.getElementById('max-duration');
const fullScreenButton = document.querySelector('.fullscreen-btn');


playPause.addEventListener('click', togglePlayPause);

video.addEventListener('click', togglePlayPause);

video.addEventListener('play', () => {
    playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

video.addEventListener('pause', () => {
    playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
});


function togglePlayPause(){
    if(video.paused){
        videoThumbnail.style.display = "none";
        video.play();      
    }
    else{
        video.pause();
    }   
}

document.addEventListener('keydown', function (event){
    if(event.code === "Space"){
        event.preventDefault();
        togglePlayPause();
    }
})
