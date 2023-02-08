import { useState, useEffect } from 'react';

import MovieList from "../../components/MovieList/MovieList"

import { ThemoviedbAPI } from "../../services/ThemoviedbAPI"

// import { getTrendingMovies } from '../../api/api-tmdb';
const trendings = '/trending/all/day';

function Home() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    ThemoviedbAPI(trendings)
        .then(data => {
            const { results } = data;
            // console.log(results);
        setMovieList(results);
      });
  }, []);

    return (
        <section>
            <h1>Trending today</h1>
            {movieList.length > 0 && <MovieList
                movieList={movieList} />}
        </section>
  );
};

export default Home;