const images = document.getElementsByClassName('project-image');

[...images].forEach(image => {
    const picture = image.parentNode;
    const clone = picture.cloneNode(true);
    const img = clone.querySelector('img');

    img.classList.remove('project-image');
    img.classList.add('project-blur');
    img.setAttribute('alt', '');

    picture.parentNode.appendChild(clone);
});
