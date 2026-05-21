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


forward.addEventListener('click', function(){
    video.currentTime += 10;
})

backward.addEventListener('click', function(){
    video.currentTime -= 10;
})


muteButton.addEventListener('click', function(){
    if(video.muted){
        video.muted = false;

        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        volume.value = video.volume;

    }
    else{
        video.muted = true;
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        volume.value = 0;
    }
})

document.addEventListener('keydown', function(event){
    if(event.key=="M" || event.key=="m"){
        event.preventDefault();

        if(video.muted){
            video.muted = false;

            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            volume.value = video.volume;

        }
        else{
            video.muted = true;
            muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            volume.value = 0;
        }
    }
})

volume.addEventListener("input",function(){
    video.volume = volume.value;
    
    if(video.volume === 0){
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
    else {
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
})

videoContainer.addEventListener("mouseenter", ()=>{
    controls.style.opacity = 1;
})

videoContainer.addEventListener("mouseleave", ()=>{
    controls.style.opacity = 0;
})
