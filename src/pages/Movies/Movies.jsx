import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm/SearchForm"
import MovieList from "../../components/MovieList/MovieList"
import { ThemoviedbAPI, typeQueryMovie } from "../../services/ThemoviedbAPI"

function Movies() {

    const [movieList, setMovieList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams('');

    useEffect(() => {
        setSearchQuery(searchParams.get("query"));
        // console.log(searchQuery);
        if (searchQuery === "") return;

        if (searchQuery) {

            ThemoviedbAPI(typeQueryMovie, searchQuery)
            .then(data => {
                const { results } = data;
                // console.log(results);
                setMovieList(results);
           });
        } 
    }, [searchQuery, searchParams]); 
    
    function handleFormSubmit (searchQuery) {
        // console.log(searchQuery);
        // setSearchQuery(searchQuery);
        // setMovieList([]);
        
        setSearchParams({ query: searchQuery });
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