import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { ThemoviedbApiMovieId, typeQueryReviews } from "../../services/ThemoviedbAPI";
import css from "./Reviews.module.css"

function Reviews() {

    const [reviewsData, setReviewsData] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        ThemoviedbApiMovieId(movieId, typeQueryReviews)
            .then(data => {
                setReviewsData(data);
                // console.log(movieDetails);
            });
    }, [movieId]); 

    if (!reviewsData) {
        return;
    };
    
    // console.log(reviewsData);
    const reviews = reviewsData.results

    if (reviews.length === 0) {
        return <p>We don't have revievs for this movie</p>;
    };
    
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