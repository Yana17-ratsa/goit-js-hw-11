import{S as f,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(o){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"43111916-8a66f764b7b1580d41f140627",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${r}?${i}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const h=document.querySelector(".gallery"),d=new f(".gallery a",{captionsData:"alt"});function g(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:p})=>`<li class="item-image">
                <a class="photos-list-link" href="${s}">             <img class="photo" src="${i}" alt="${e}"/>             </a>             <ul class="photo-information-container">                <li class="item-photo-information-container"><p><span class="accent">Likes</span>${t}</p></li>
                <li class="item-photo-information-container"><p><span class="accent">Views</span>${n}</p></li>                <li class="item-photo-information-container"><p><span class="accent">Comments</span>${u}</p></li>                 <li class="item-photo-information-container"><p><span class="accent">Downloads</span>${p}</p></li>                </ul>                </li>`).join("");h.insertAdjacentHTML("beforeend",r),d.refresh()}let l;const y=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=document.querySelector(".js-form");function b(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}L.addEventListener("submit",S);function S(o){if(o.preventDefault(),y.innerHTML="",l=o.target.elements.search.value.trim(),b(),l===""){a.warning({color:"yellow",message:"Please fill in the field for search!",position:"topRight"});return}m(l).then(r=>{r.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}),g(r.hits),o.target.reset()}).catch(r=>{console.log(r),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).finally(()=>w())}
//# sourceMappingURL=commonHelpers.js.map