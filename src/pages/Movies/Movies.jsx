import { useState, useEffect, useSearchParams } from 'react';

import SearchForm from "../../components/SearchForm/SearchForm"
import MovieList from "../../components/MovieList/MovieList"
import { ThemoviedbAPI } from "../../services/ThemoviedbAPI"

const typeQuery = '/search/movie';

function Movies() {

    const [movieList, setMovieList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // const [searchParam, setSearchParam] = useSearchParams();

    // const [movieId, setMovieId] = useState('');

    
    
    useEffect(() => {

        if (searchQuery) {

            ThemoviedbAPI(typeQuery, searchQuery)
            .then(data => {
                const { results } = data;
                console.log(results);
                setMovieList(results);
           });
        }  
    }, [searchQuery]); 
    
    function handleFormSubmit (searchQuery) {
        console.log(searchQuery);
        setSearchQuery(searchQuery);
        setMovieList([]);
    };    
    
    const showMoviesList = movieList.length > 0 && searchQuery;

    return (
        <section>
            <SearchForm
            onSubmit={handleFormSubmit}
            ></SearchForm>
            {showMoviesList &&
                <MovieList
                    movieList={movieList}
                />}
            
        </section>
  );
};

export default Movies;









// import React, { useState } from 'react';
// // import { useState } from 'react';
// import PropTypes from 'prop-types';

// import css from './Searchbar.module.css'

// const Searchbar = ({ onSubmit }) => {

//    const [searchQuery, setSearchQuery]  = useState('')
      
//     function handleChange (event) {
//         // console.log(event.currentTarget.value);
//         setSearchQuery(event.currentTarget.value);
//     }
    
//     function handleSubmit (event) {
//         event.preventDefault();
//         // console.log(this.state);
//         const searchQueryNorm = searchQuery.toLowerCase();
//         // console.log(searchQueryNorm);
//         if (searchQueryNorm.trim() === '') {
//             alert('Введіть запит');
//             return;  
//         }
//         onSubmit(searchQueryNorm)
//         setSearchQuery('');
//     }
    
//         return (
//             <div>
//                <header className={css.searchbar}>
//                     <form
//                     className={css.form}
//                     onSubmit={handleSubmit}>
//                         <input
//                         className={css.input}
//                         type="text"
//                         value={searchQuery}  
//                         onChange={handleChange}    
//                         autocomplete="off"
//                         placeholder="Search images and photos"
//                         autofocus
//                         />
//                     </form>
//                 </header>
//             </div>
//         )  
// }

// export default Searchbar;

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }    
