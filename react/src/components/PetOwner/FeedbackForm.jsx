import React, { useState } from 'react';
import '../../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., send data to backend)
    setSubmitted(true);
  };

  return (
    <div className="feedback-page">
      <h2 className="feedback-title">Share Your Feedback</h2>
      <p className="feedback-subtitle">
        We value your opinion and would love to hear about your <br />
        experience with FurEver Care
      </p>

      <div className="feedback-horizontal-container">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="form-input"
            required
          />

          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="form-input"
            required
          />

          <label className="form-label">Rate Your Experience</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${
                  (hoverRating || rating) >= star ? 'filled' : 'empty'
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                role="button"
                tabIndex={0}
                aria-label={`${star} star`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setRating(star);
                  }
                }}
              >
                &#9733;
              </span>
            ))}
          </div>

          <label htmlFor="feedback" className="form-label">
            Your Feedback <span className="required">*</span>
          </label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Please share your thoughts, suggestions, or experiences with FurEver Care..."
            className="form-textarea"
            required
          ></textarea>

          <button type="submit" className="submit-button">
            SUBMIT FEEDBACK
          </button>
        </form>

        {submitted && (
          <div className="thank-you-message">
            <strong>Thank You!</strong>
            <p>
              Your feedback helps us improve our services and provide better care
              for your furry friends.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
