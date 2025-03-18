import { useState, useEffect } from "react";

export default function Home() {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        fetch("http://localhost:3000/movies")
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err))
    };

    useEffect(fetchMovies, []);

    return (
        <main className="container">
            <h1>Lista Film</h1>
        </main>
    )
}