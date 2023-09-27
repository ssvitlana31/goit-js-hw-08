import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const ulGalleryEl = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join('');
}

ulGalleryEl.insertAdjacentHTML('beforeend', itemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
