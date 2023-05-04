// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryListEl = document.querySelector('.gallery');

function createGallery() {
  const galleryItemsMarkUp = galleryItems
    .map(
      item =>
        `<li class="gallery__item" style="list-style: none">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
   </a>
</li>`
    )
    .join('');

  galleryListEl.insertAdjacentHTML('beforeend', galleryItemsMarkUp);
}

createGallery();

new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  animationSlide: false,
});
