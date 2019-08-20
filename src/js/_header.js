/*

    fade in the hero gif when it's loaded or retrieved from the cache

*/

const gif = document.getElementsByClassName('header-image')[0];

const fadeInGif = () => {
    gif.classList.add('visible');
    gif.removeEventListener('load', fadeInGif);
}

if (gif.complete) {
    gif.classList.add('visible');
} else {
    gif.addEventListener('load', fadeInGif);
}
