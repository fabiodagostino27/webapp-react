import { useState } from "react";

export default function AddReviewForm() {
    const initialValue = {
        name: "",
        text: "",
        vote: null
    };
    
    const [formData, setFormData] = useState(initialValue);

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
                        value={formData.name}
                        onChange={setFieldValue}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Review</label>
                    <textarea
                        className="form-control"
                        id="name"
                        value={formData.text}
                        onChange={setFieldValue}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Review</label>
                    <input
                        type="number"
                        min={1}
                        max={5}
                        className="form-control"
                        id="name"
                        value={formData.text}
                        onChange={setFieldValue}  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}