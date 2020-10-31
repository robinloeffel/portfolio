const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('canplaythrough', () => {
    video.classList.add('video-loaded');
  }, {
    once: true
  });
});
