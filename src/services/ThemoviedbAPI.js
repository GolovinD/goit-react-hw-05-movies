const API_LINK = `https://api.themoviedb.org/3`;
const API_KEY = `19011014b9b53c4fd496d37c25f2b619`;

export const trendings = '/trending/all/day';
export const typeQueryMovie = '/search/movie';
export const typeQueryReviews = '/reviews';


export function ThemoviedbAPI(typeQuery, searchQuery) {
    // console.log(typeQuery);
    // console.log(searchQuery);
    
    return fetch(`${API_LINK}${typeQuery}?api_key=${API_KEY}&query=${searchQuery}`)

    .then(response => {
    
        if (response.ok) {
            // console.log(response);
            return response.json();
        }
        return Promise.reject(
            new Error(`Нажаль нічого не знайдено`)
        )
    })
}

export function ThemoviedbApiMovieId( id, typeQuery) {
    // console.log(id);
    return fetch(`${API_LINK}/movie/${id}${typeQuery}?api_key=${API_KEY}`)
    .then(response => {
    
        if (response.ok) {
            // console.log(response);
            return response.json();
        }
        return Promise.reject(
            new Error(`Нажаль нічого не знайдено`)
        )
    })
}

