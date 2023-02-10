import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { ThemoviedbApiMovieId } from "../../services/ThemoviedbAPI";
import css from "./Reviews.module.css"

const typeQuery = '/reviews';

function Reviews() {

    console.log('render reviews!!');

    const [reviewsData, setReviewsData] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        ThemoviedbApiMovieId(movieId, typeQuery)
            .then(data => {
                setReviewsData(data);
                // console.log(movieDetails);
            });
    }, [movieId]); 

    if (!reviewsData) {
        return;
    };

    const reviews = reviewsData.results
    // console.log(cast);

return (
    <ul className={css.reviewsList}>
        {reviews.map(({ id, author, content }) => {

          return (
            <li className={css.reviewsItem} key={id}>
              <p className={css.reviewsAuthor}>Author: {author}</p>
              <p className={css.reviewsContent}>{content}</p>
            </li>
            )}
        )}
    </ul>
  );
}

export default Reviews;