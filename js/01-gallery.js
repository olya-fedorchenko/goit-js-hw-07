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
        <div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>
`
    }).join('');
}

galleryEl.addEventListener(`click`, onGalleryElClick) 


function onGalleryElClick(event) {
    event.preventDefault();
    const galleryImage = event.target.classList.contains('gallery__image');

    if(!galleryImage) {
        return;
      };

    const instance = basicLightbox.create(
        
        `
    <img src="${ event.target.dataset.source}" width="800" height="600" >
    `,
    {
        onShow: () => document.addEventListener("keydown", onEscPress),
        onClose: () => document.removeEventListener("keydown", onEscPress),
      }
    );
    instance.show();


    function onEscPress(event) {
        if (event.code === "Escape") {
          instance.close();
        }
    }

}

