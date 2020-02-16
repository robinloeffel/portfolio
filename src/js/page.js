const video = document.querySelector('.header-video');
video.addEventListener('canplay', () => {
    video.classList.add('header-video-loaded');
});
