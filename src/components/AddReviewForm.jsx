import { useState } from "react";

export default function AddReviewForm({fetchMovie}) {
    const initialValue = {
        name: "",
        text: "",
        vote: 1
    };
    
    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/movies/2/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(fetchMovie())
            .catch(err => console.log(err))
        };
        
        const setFieldValue = (e) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            })
        };

    return (
        <div className="container">
            <h3>Add review</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={setFieldValue}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Review</label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="text"
                        value={formData.text}
                        onChange={setFieldValue}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input
                        type="number"
                        min={1}
                        max={5}
                        className="form-control"
                        id="vote"
                        name="vote"
                        value={formData.vote}
                        onChange={setFieldValue}  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}