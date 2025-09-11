import React, { useState } from 'react';
import '../../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
      <div className="container">

        {/* <div className="page-header">
           <p>We value your opinion and would love to hear about your experience with FurEver Care</p>
        </div> */}      <h2>Share Your Feedback</h2>
       

        <div className="feedback-form">
            <form id="feedbackForm">
                <div className="form-container">
                 
                    <div className="contact-section">
                        <h3 className="section-title">
                            <div className="title-icon">👤</div>
                            Contact Information
                        </h3>
                        
                        <div className="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="Enter your full name" required/>
                        </div>

                        <div className="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="Enter your email address" required/>
                        </div>

                        <div className="form-group">
                            <label for="phone">Phone Number (Optional)</label>
                            <input type="tel" id="phone" name="phone" className="form-input" placeholder="Enter your phone number"/>
                        </div>
                    </div>

         
                    <div className="feedback-section">
                        <h3 className="section-title">
                            <div className="title-icon">💭</div>
                            Your Experience
                        </h3>

                        <div className="rating-container">
                            <label>Rate Your Experience</label>
                            <div className="rating-stars">
                                <span className="star" data-rating="1">★</span>
                                <span className="star" data-rating="2">★</span>
                                <span className="star" data-rating="3">★</span>
                                <span className="star" data-rating="4">★</span>
                                <span className="star" data-rating="5">★</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="feedback">Your Feedback *</label>
                            <textarea id="feedback" name="feedback" className="form-input form-textarea" placeholder="Please share your thoughts, suggestions, or experiences with FurEver Care..." required></textarea>
                        </div>
                    </div>

                  
                    <div className="submit-section">
                        <h3 className="section-title">
                            <div className="title-icon">📝</div>
                            Feedback Category
                        </h3>

                        <div className="category-selection">
                            <label>What is your feedback about?</label>
                            <div className="category-options">
                                <div className="category-option">
                                    <input type="radio" id="service" name="category" value="service"/>
                                    <label for="service">Pet Care Services</label>
                                </div>
                                <div className="category-option">
                                    <input type="radio" id="website" name="category" value="website"/>
                                    <label for="website">Website Experience</label>
                                </div>
                                <div className="category-option">
                                    <input type="radio" id="products" name="category" value="products"/>
                                    <label for="products">Pet Products</label>
                                </div>
                                <div className="category-option">
                                    <input type="radio" id="support" name="category" value="support"/>
                                    <label for="support">Customer Support</label>
                                </div>
                                <div className="category-option">
                                    <input type="radio" id="other" name="category" value="other"/>
                                    <label for="other">Other</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">Submit Feedback</button>
                    </div>
                </div>
            </form>
        </div>

    
        <div className="success-message" id="successMessage" style={{ display: submitted ? 'block' : 'none' }}>
            <h3>🎉 Thank You for Your Feedback!</h3>
            <p>We appreciate you taking the time to share your experience with us. Your feedback helps us improve our services and provide better care for your furry friends. We'll review your comments and get back to you if needed.</p>
        </div>
    </div>
    
   
  );
};

export default FeedbackForm;
