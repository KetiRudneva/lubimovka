const videoPlayButton = document.querySelector('.play');
const video = document.querySelector('.description__video');
let videoIsPlayed = false;
const videoPlayButtonClick = (event) => {
    video.setAttribute('controls', 'controls');
    videoPlayButton.classList.add('play_type_hidden');
    video.play();
}
videoPlayButton.addEventListener('click', videoPlayButtonClick);