import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages} from './js/pixabay-api';
import { renderMarkup } from './js/render-functions';  

let query;
const gallery  = document.querySelector(".gallery");
const preloader = document.querySelector(".loader");
const form = document.querySelector(".js-form");

function showLoader() {
  preloader.classList.remove("is-hidden")
};
function hideLoader() {
preloader.classList.add("is-hidden")
};


form.addEventListener("submit", validInput);

function validInput(event){

  event.preventDefault();

  gallery.innerHTML = "";

  query = event.target.elements.search.value.trim();

  showLoader();
  
  if (query === "") {
      iziToast.warning({
          color: 'yellow',
          message: "Please fill in the field for search!",
          position: 'topRight'
      })
      return
  }
    getImages(query).then(data =>{
      if (data.hits.length === 0) {
          iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: "red",
            messageColor: "white",
            position: 'topRight'})
          }
          renderMarkup(data.hits)

          event.target.reset();
          
      return
    })
    .catch(error => {console.log(error);
          iziToast.error({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please, try again!`,
            position: 'topRight'}
            )
          }).finally(() => hideLoader())
        }