
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


import { ThemoviedbApiMovieId } from "../../services/ThemoviedbAPI";
import css from "./Cast.module.css"

// const location = useLocation();

const typeQuery = '/credits';

export default function Cast() {


    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();    

    useEffect(() => {
        ThemoviedbApiMovieId(movieId, typeQuery)
        .then(data => {
            // console.log(typeQuery);
            // console.log(data);
            setMovieDetails(data);
            // console.log(movieDetails);
        });
    }, [movieId]); 

    console.log(movieDetails);


    
}