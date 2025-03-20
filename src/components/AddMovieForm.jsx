import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddMovieForm() {
    const navigate = useNavigate();

    const initialValue = {
        title: "",
        director: "",
        genre: "",
        release_year: 0,
        abstract: "",
        image: null
    };

    const [formData, setFormData] = useState(initialValue);

    const setFieldValue = (e) => {
        const { name, value } = e.target;

        if (name === "image") {
            setFormData({
                ...formData,
                image: e.target.files[0]
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    };


    //doesn't work
    //const handleSubmit = (e) => {
    //    e.preventDefault();

    //    fetch(`http://localhost:3000/movies`, {
    //        method: "POST",
    //        body: formData
    //    })
    //        .catch(err => console.log(err))
    //};

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3000/movies', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(() => {
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <main className="container my-4">
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <div className="row g-2">
                    <div className="col-6">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={setFieldValue}
                            required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="director" className="form-label">Director</label>
                        <input
                            className="form-control"
                            type="text"
                            name="director"
                            value={formData.director}
                            onChange={setFieldValue}
                            required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="genre"
                            value={formData.genre}
                            onChange={setFieldValue}
                            required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="release_year" className="form-label">Release year</label>
                        <input
                            className="form-control"
                            type="number"
                            min={1900}
                            max={2025}
                            name="release_year"
                            value={formData.release_year}
                            onChange={setFieldValue}
                            required />
                    </div>

                    <div>
                        <label htmlFor="abstract" className="form-label">Abstract</label>
                        <textarea
                            className="form-control"
                            name="abstract"
                            value={formData.abstract}
                            onChange={setFieldValue}
                            required></textarea>
                    </div>

                    <div>
                        <label htmlFor="image" className="form-label">Movie cover</label>
                        <input
                            type="file"
                            className="form-control"
                            name="image"
                            onChange={setFieldValue}
                            required />
                    </div>
                </div>

                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </main>
    )
};