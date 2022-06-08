const videoPlayButton = document.querySelector('.performance__play');
const video = document.querySelector('.performance__video');
let videoIsPlayed = false;
const videoPlayButtonClick = (event) => {
    if (!videoIsPlayed) {
        video.play();
        videoIsPlayed = true;
    } else {
        video.pause();
        videoIsPlayed = false;
    }
}
videoPlayButton.addEventListener('click', videoPlayButtonClick);