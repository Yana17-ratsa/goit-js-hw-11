
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export const refs = {
    formEl: document.querySelector(".js-form"),
    infoEl: document.querySelector(".gallery"),
}


export function renderMarkup(arr) {
    if (arr.lenght === o) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            theme: 'dark',
            progressBarColor: '#FFFFFF',
            color: '#EF4040',
            position: 'topRight',
          });
          hideLoader();
        } else {
            const markup = arr.map((image) => {
                return `<li class="item-image">
                <a class="photos-list-link" href="${image.largeImageURL}">
                <img class="photo" src="${image.webformatURL}" alt="${image.tags}"/>
                </a>
                <ul class="photo-information-container">
                <li class="item-photo-information-container"><p><span class="accent">Likes</span>${image.likes}</p></li>
                <li class="item-photo-information-container"><p><span class="accent">Views</span>${image.views}</p></li>
                <li class="item-photo-information-container"><p><span class="accent">Comments</span>${image.comments}</p></li>
                <li class="item-photo-information-container"><p><span class="accent">Downloads</span>${image.downloads}</p></li>
                </ul>
                </li>`;
            })
            .join("");
            refs.infoEl.insertAdjacentHTML("beforeend", markup);
            lightbox.refresh();
        }
        hideLoader();
    };