import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const reviews = [
  {
    id: 1,
    Name: "Soumen Mondal",
    rating: 5,
    review:
      "I had a podcast recently with 24 pods and I must say it was a great experience. From beginning host Alaka made us welcome.",
    avatar: "/images/reviews/soumen-mondal.png",
  },
  {
    id: 2,
    Name: "Rachel",
    rating: 5,
    review:
      "Such a great experience being on 24Pods with Alaka. She brings genuine care and curiosity as a host.",
    avatar: "/images/reviews/rachel.png",
  },
  {
    id: 3,
    Name: "Gunjanmk",
    rating: 5,
    review:
      "I recently recorded my podcast at 24Pods and the experience was absolutely brilliant.",
    avatar: "/images/reviews/gunjanmk.png",
  },
];

const GoogleReviewCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isSwipeMode, setIsSwipeMode] = useState(false);

  const loopedReviews = [...reviews, ...reviews, ...reviews];

  const updateLayout = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setVisibleCount(1);
      setIsSwipeMode(true);
    } else if (width < 992) {
      setVisibleCount(2);
      setIsSwipeMode(true);
    } else {
      setVisibleCount(3);
      setIsSwipeMode(false);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  /* Auto slide ONLY on desktop */
  useEffect(() => {
    if (isSwipeMode) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isSwipeMode]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const getTransform = () => {
    if (isSwipeMode) return "none";
    return `translateX(-${activeIndex * (100 / visibleCount)}%)`;
  };

   const reviewLink =
    "https://search.google.com/local/writereview?placeid=ChIJpYZzGI2fEmsReWprkS6Q5o0";

  return (
    <section className="google-review-section">
      <Container>
        <div className="review-header-section text-center mb-4">
          <h2 style={{ color: "#fff", fontSize:"35px", fontWeight:"700"}}>
            What <span style={{ color: "#e0afff" }}>Others Say</span>
          </h2>
          <p style={{ color: "#fff"}}>
            Hear from our amazing podcast guests
          </p>
        </div>

        <div className="carousel-container position-relative">

          {!isSwipeMode && (
            <button className="carousel-arrow arrow-left" onClick={handlePrev}>
              <IoIosArrowBack />
            </button>
          )}

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: getTransform() }}
            >
              {loopedReviews.map((review, index) => (
                <div
                  key={index}
                  className="review-card-wrapper"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="google-review-card">
                    <FaQuoteLeft className="quote-icon quote-left" />
                    <FaQuoteRight className="quote-icon quote-right" />

                    <div className="review-header">
                      <img
                        src={review.avatar}
                        alt={review.Name}
                        className="review-avatar"
                      />
                      <div>
                        <h5 className="reviewer-name">{review.Name}</h5>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={
                                i < review.rating
                                  ? "star-filled"
                                  : "star-empty"
                              }
                            />
                          ))}
                          <span className="rating-text">5.0</span>
                        </div>
                      </div>
                    </div>

                    <p className="review-text">"{review.review}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isSwipeMode && (
            <button className="carousel-arrow arrow-right" onClick={handleNext}>
              <IoIosArrowForward />
            </button>
          )}
        </div>

       <div style={{textAlign:"center", marginTop:"20px"}}>
         <a
      href={reviewLink}
      target="_blank"
      rel="noopener noreferrer"
      className="google-review-pill"
      aria-label="Review us on Google"
    >
      <span className="review-text">Review us on</span>

      <span className="google-icon">
        <img
      src="/images/reviews/google.png" // <-- Add your image path here
      alt="Google"
      style={{ width: "24px", height: "24px", borderRadius: "50%" }} // optional styling
    />
      </span>
    </a>
       </div>
      </Container>
    </section>
  );
};

export default GoogleReviewCarousel;
