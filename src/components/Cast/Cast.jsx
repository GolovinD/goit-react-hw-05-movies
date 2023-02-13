import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { ThemoviedbApiMovieId } from "../../services/ThemoviedbAPI";
import css from "./Cast.module.css"

const typeQuery = '/credits';

function Cast() {
    // console.log('render Cast!!');
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        ThemoviedbApiMovieId(movieId, typeQuery)
            .then(data => {
                // console.log(typeQuery);
  
                setMovieDetails(data);
                // console.log(movieDetails);
            });
    }, [movieId]); 

    if (!movieDetails) {
        return;
    };
    // console.log(movieDetails);
    const cast = movieDetails.cast
    // console.log(cast);

  if (cast.length === 0) {
    return <p>We don't have revievs for this movie</p>;
  };
  
  return (
    <>
      <ul className={css.castList}>
        {cast.map(item => {
          const { id, name, character, profile_path } = item;
          let profileImg = `https://image.tmdb.org/t/p/w500${profile_path}`;

          if (!profile_path) {
            profileImg = 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
          };

          return (
            <li className={css.castItem} key={id}>
              <img className={css.castImg} src={profileImg} alt={name} width="120"/>
              <p className={css.castDesc}>{name}</p>
              <p className={css.castDesc}>{character}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Cast;