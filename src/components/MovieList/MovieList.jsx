import { Link, useLocation } from 'react-router-dom'; 

function MovieList ({ movieList }) {
    
    const location = useLocation();

    return (
               
        <ul>
            {movieList.map(({ id, title, name }) => (
                <li key={id}>
                    <Link     
                        to={`/movies/${id}`}
                        state={{ from: location }}
                    >{title || name}   
                    </Link>
                </li>
            ))}  
        </ul>  
    )
}

export default MovieList;