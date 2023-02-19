import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, useLocation, Outlet } from "react-router-dom";

import ButtonBack from '../../components/Buttons/ButtonBack'
import { ThemoviedbApiMovieId } from "../../services/ThemoviedbAPI";
import css from "./MovieDetails.module.css"

function  MovieDetails() {

    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
   
     useEffect(() => {
        ThemoviedbApiMovieId(movieId)
            .then(data => {
                setMovieDetails(data);
        });
    }, [movieId]); 

      if (!movieDetails) {
    return;
    }; 
    
    const { name, title, release_date, overview, genres, poster_path, vote_average } = movieDetails;
    const releaseYaer = new Date(release_date);
    const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';

    // if (!poster_path) {
    // poster = 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
    // };

    const backLinkHref = location.state?.from ?? '/';

    return (
    <>
    <section className={css.section}>
            
        <ButtonBack />
        
        <div className={css.movieDetails}>
            <img className={css.movieDetails__img} src={poster} alt={title || name} width="240" height="320"/>
            <div className={css.movieDetails__desc}>
                <h2>{title || name} ({releaseYaer.getFullYear()})</h2>
                <p>User score: {Math.round(vote_average * 10)} %</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{ genres && genres.length > 0 && genres.map(genr => genr.name).join(", ")}</p>
            </div>
        </div>
          
        <div className={css.movieDetails__info}>
            <p>Addination information</p>
            <ul className={css.movieDetails__nav}>
                <li>
                    <NavLink
                        to="cast"
                        className={css.navLink}
                        state={{ from: backLinkHref }}
                    >Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews"
                        className={css.navLink}
                        state={{ from: backLinkHref }}
                    >Reviews</NavLink>
                </li>
            </ul>
        </div>
    </section>
    <Suspense fallback={<div>Loading...</div>}>
        <section>
            <Outlet/>
        </section>
    </Suspense>    
    </>  
  );    
}

export default MovieDetails;