import gallery from "./gallery-items.js";
const listGallery = document.querySelector('.js-gallery'),
    lightbox = document.querySelector('.lightbox'),
    lightboxCloseBtn = document.querySelector(".lightbox__button"),
    lightboxImg =  document.querySelector('.lightbox__image');

listGallery.addEventListener("click", (event) => {
    event.preventDefault();
    lightbox.classList.add("is-open");
    lightboxImg.setAttribute("src", event.target.dataset.source);
});

lightboxCloseBtn.addEventListener("click", () => {
    lightbox.classList.remove("is-open");
    lightboxImg.setAttribute("src", "");
});

gallery.map((obj, i, arr)=> {
    const imgPreviewGallery = document.createElement("img");

    imgPreviewGallery.setAttribute('src', obj.preview);
    imgPreviewGallery.setAttribute('alt', obj.description);
    imgPreviewGallery.classList.add('gallery__image');
    imgPreviewGallery.setAttribute('data-source', obj.original);
    imgPreviewGallery.setAttribute('data-value', i);

    const linkGallery = document.createElement('a');
    linkGallery.classList.add('gallery-link');
    linkGallery.setAttribute('href', obj.original);

    linkGallery.appendChild(imgPreviewGallery);

    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    galleryItem.appendChild(linkGallery);
    listGallery.appendChild(galleryItem);
});