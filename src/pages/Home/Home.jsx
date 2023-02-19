import { useState, useEffect } from 'react';

import MovieList from "../../components/MovieList/MovieList"
import { ThemoviedbAPI, trendings } from "../../services/ThemoviedbAPI"

function Home() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    ThemoviedbAPI(trendings)
        .then(data => {
            const { results } = data;
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