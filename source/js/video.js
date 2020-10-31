const video = document.querySelector('.video');

video.addEventListener('canplaythrough', () => {
  video.classList.add('video-loaded');
}, {
  once: true
});
