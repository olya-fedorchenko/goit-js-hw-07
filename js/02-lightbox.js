import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryEl = document.querySelector(`.gallery`)

const galleryPicture =  makeGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryPicture);


function makeGallery(galleryItems) {
    return galleryItems
    .map(galleryItem => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>
</li>
`
    }).join('');
}

new SimpleLightbox('.gallery a', {
    captionsData : 'alt',
    captionDelay : 250
});



