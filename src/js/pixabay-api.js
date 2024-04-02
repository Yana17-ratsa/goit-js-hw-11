

// //Подія
// refs.formEl.addEventListener('submit', e => {
//     e.preventDefault();
//     const query = refs.formEl.elements.search.value;

//     getImages(query).then(data => {
//         const markup = renderMarkup(data);
//         refs.infoEl.innerHTML = markup;
//     })
// });




export function getImages(query) {
        const BASE_URL = 'EThttps://pixabay.com/api/';
        const params = new URLSearchParams ({
            key: '43111916-8a66f764b7b1580d41f140627',
            q: query,
            image_type: 'photo',
            orientation : 'horizontal',
            safesearch : true,
        });
    
        url = `${BASE_URL}?${params}`;
    
        return fetch(url).then(res => {
            if(!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        }
        );
    }


