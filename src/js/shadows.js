const images = document.querySelectorAll('.project-image');

images.forEach(image => {
  const clone = image.cloneNode();

  clone.style.position = 'absolute';
  clone.style.pointerEvents = 'none';
  clone.style.zIndex = '-1';
  clone.style.filter = 'blur(20px)';

  image.after(clone);
});
