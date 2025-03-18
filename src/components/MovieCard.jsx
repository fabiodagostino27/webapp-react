import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-3">
            <div className="card">
                <img src={movie.image} className="card-img-top" alt="..." style={{aspectRatio: 11/17}} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.abstract}</p>
                        </div>
                        <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read More</Link>
                    </div>
            </div>
        </div>
    )
}