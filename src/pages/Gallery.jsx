import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const categories = ["All", "Our Lunch", "BTS Moments"];

const videos = [
  { id: 1, category: "BTS Moments", src: "/images/team.jpeg" },
  { id: 2, category: "Our Lunch", src: "/images/alaka-images/Vertical  (8).png" },
   { id: 3, category: "Our Lunch", src: "/images/alaka-images/Horizontal (28).png" },
  { id: 4, category: "Our Lunch", src: "/images/alaka-images/Vertical  (18).png" },
  { id: 5, category: "Our Lunch", src: "/images/alaka-images/Vertical  (19).png" },
  { id: 6, category: "Our Lunch", src: "/images/alaka-images/Vertical  (14).png" },
  { id: 7, category: "BTS Moments", src: "/images/alaka-images/Horizontal (9).png" },
  { id: 8, category: "BTS Moments", src: "/images/alaka-images/Vertical  (7).png" },
  { id: 9, category: "BTS Moments", src: "/images/alaka-images/Vertical  (9).png" },
  { id: 10, category: "BTS Moments", src: "/images/alaka-images/Horizontal (8).png" },
  { id: 11, category: "BTS Moments", src: "/images/alaka-images/Horizontal (10).png" },
  { id: 12, category: "BTS Moments", src: "/images/alaka-images/Vertical  (10).png" },
  { id: 13, category: "BTS Moments", src: "/images/alaka-images/Horizontal (11).png" },
  { id: 14, category: "BTS Moments", src: "/images/alaka-images/Horizontal (12).png" },
  { id: 15, category: "BTS Moments", src: "/images/alaka-images/Horizontal (13).png" },
  { id: 16, category: "BTS Moments", src: "/images/alaka-images/Horizontal (17).png" },
  { id: 17, category: "BTS Moments", src: "/images/alaka-images/Horizontal (2).png" },
  { id: 18, category: "BTS Moments", src: "/images/alaka-images/Horizontal (20).png" },
  { id: 19, category: "BTS Moments", src: "/images/alaka-images/Horizontal (24).png" },
  { id: 20, category: "BTS Moments", src: "/images/alaka-images/Horizontal (25).png" },
  { id: 21, category: "BTS Moments", src: "/images/alaka-images/Horizontal (29).png" },
  { id: 22, category: "BTS Moments", src: "/images/alaka-images/Horizontal (30).png" },
  { id: 23, category: "BTS Moments", src: "/images/alaka-images/Vertical  (6).png" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const filteredVideos =
    activeTab === "All"
      ? videos
      : videos.filter((video) => video.category === activeTab);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  
  return (
    <>
    <Helmet>
        <link
          rel="canonical"
          href="https://www.24pods.com.au/gallery"
        />
        <title>Gallery</title>
      </Helmet>
    <section>
      {/* Banner */}
      <div className="gallery-banner d-flex align-items-center justify-content-center text-center">
        <h1 className="gallery-title">Gallery</h1>
      </div>

   <div style={{ background: "#fff"}}>
       <div className="gallery-section container py-5">
        {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn rounded-pill px-4 py-2 fw-medium tab-btn scrollable-tabs ${
                activeTab === category ? "active-tab" : "outline-tab"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4 justify-content-center">
          {filteredVideos.map((video) => (
            <div key={video.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div
                className="video-card"
                onClick={() => openModal(video.src)}
                role="button"
              >
                <img
                  src={video.src}
                  alt="Thumbnail"
                  className="video-thumbnail"
                />
              </div>
            </div>
          ))}
        </div>
      </div></div>

      {/* Modal Overlay */}
      {modalImage && (
        <div className="custom-modal" onClick={closeModal}>
          <span
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            &times;
          </span>
          <img src={modalImage} alt="Preview" className="modal-img" />
        </div>
      )}
    </section>
    </>
  );
};

export default Gallery;
