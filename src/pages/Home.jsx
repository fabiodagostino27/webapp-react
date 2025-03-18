import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        fetch("http://localhost:3000/movies")
            .then(res => res.json())
            .then(data => setMovies(data))
    };

    useEffect(fetchMovies, []);

    return (
        <main className="container my-4">
            <h1>Lista Film</h1>
            <div className="row">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </main>
    )
}