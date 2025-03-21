import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "../components/AddReviewForm";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Movie() {
    const {setIsLoading} = useContext(GlobalContext);
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        setIsLoading(true);

        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .then(err => console.log(err))
            .then(() => setIsLoading(false))
    };

    const renderReviews = () => {
        return (
            movie.reviews?.map(r => {
                return(
                    <li key={r.id} className="list-group-item py-3">
                        <h5><em>Review by: </em>{r.name}</h5>
                        <p>{r.text}</p>
                        <span><strong>Voto: </strong>{r.vote}</span>
                    </li>
                )
            })
        );
    };

    useEffect(fetchMovie, [id]);

    return (
        <main className="container my-4">
            <h1>{movie.title}</h1>
            <div className="d-flex my-4 single-movie">
                <figure className="w-25 py-3 pe-3">
                    <img src={movie.image} alt={movie.title} className="w-100" />
                </figure>
                <div className="p-3">
                    <h3>Details</h3>
                    <div><strong>Director: </strong>{movie.director}</div>
                    <div><strong>Genre: </strong>{movie.genre}</div>
                    <div><strong>Release year: </strong>{movie.release_year}</div>
                    <h3 className="mt-3">Abstract</h3>
                    <p>{movie.abstract}</p>
                </div>
            </div>
            <div>
                <h3>Reviews</h3>
                <ul className="list-group list-group-flush">
                    {renderReviews()}
                </ul>
            </div>
            <AddReviewForm fetchMovie={fetchMovie} movieId={movie.id} />
        </main>
    )
}