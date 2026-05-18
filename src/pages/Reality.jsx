import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import GuestForm from "../form/GuestForm";

// ✅ Import your images
import thumbnail1 from "/images/reels-1.png";
import thumbnail2 from "/images/reels-2.png";
import thumbnail3 from "/images/reels-3.png";

const categories = ["All", "Inspire From"];

// ✅ Video data with Instagram links
const videos = [
  {
    id: 1,
    category: "Inspire From",
    thumbnail: thumbnail1,
    title: "What thing you need to give your Child?",
    videoUrl:
      "https://www.instagram.com/reel/DQiOXnIj6mM/?igsh=MTlwNzN4bDFwbmMzZw==",
  },
  {
    id: 2,
    category: "Inspire From",
    thumbnail: thumbnail2,
    title: "What Moment makes you fell like taking a pause?",
    videoUrl:
      "https://www.instagram.com/reel/DQgOyBfDxO-/?igsh=MW8xbTU2ajFoZnYxZQ==",
  },
  {
    id: 3,
    category: "Inspire From",
    thumbnail: thumbnail3,
    title: "Inspire Reel",
    videoUrl:
      "https://www.instagram.com/reel/DP2a201DzzQ/?igsh=YmN6dHQ0YmI1bmpz",
  },
];

const Reality = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  const openInstagram = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="reality-section">
      {/* ===== Banner Section ===== */}
      <div className="reality-banner d-flex align-items-center justify-content-center text-center">
        <h1 className="reality-title">Inspire From Reality</h1>
      </div>
<div class="sk-ww-instagram-hashtag-feed" data-embed-id="25646453"></div><script src="https://widgets.sociablekit.com/instagram-hashtag-feed/widget.js" defer></script>
      {/* ===== Video Gallery Section ===== */}
      <div className="video-gallery-section py-5">
        <Container>
          {/* Filter Buttons */}
          <div className="video-filter-buttons scrollable-tabs mb-4 text-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="video-grid">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => openInstagram(video.videoUrl)}
              >
                <div className="video-thumbnail-wrapper">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail"
                  />

                  {/* ✅ Overlay on hover */}
                  <div className="play-overlay">
                    <h5 className="overlay-title">{video.title}</h5>
                    <div className="play-icon-background">
                      <FaPlay className="play-icon" />
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      

      {/* Guest Form Section */}
      <GuestForm />
    </section>
  );
};

export default Reality;
