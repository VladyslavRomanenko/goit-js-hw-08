// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const galleryMarkupItems = ({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}" ">
      <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
   </a>
</li>`;
};

const galleryMarkup = galleryItems
  .map(item => galleryMarkupItems(item))
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});
