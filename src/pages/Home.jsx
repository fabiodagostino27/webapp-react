import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Home() {
    const {setIsLoading} = useContext(GlobalContext);
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        setIsLoading(true);

        fetch("http://localhost:3000/movies")
            .then(res => res.json())
            .then(data => setMovies(data))
            .then(err => console.log(err))
            .then(() => setIsLoading(false))
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