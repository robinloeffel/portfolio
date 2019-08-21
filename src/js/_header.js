/*

    fade in the hero video when it's ready to play

*/

const video = document.getElementsByClassName('header-video')[0];

const fadeIn = () => {
    video.classList.add('visible');
};

video.addEventListener('canplaythrough', fadeIn, { once: true });
