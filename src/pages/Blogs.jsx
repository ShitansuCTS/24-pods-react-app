import React from "react";
import { Link } from "react-router-dom";
import blogData from "./BlogData";


const Blogs = () => {
  const allPosts = blogData;

  return (
    <section>
      <div>
        <div className="ourpotfolio-banner d-flex align-items-center justify-content-center text-center">
          <h1 className="ourpotfolio-title">Blogs</h1>
        </div>
      </div>

      <div className="blog-page">
        <div className="blog-container">
          <div className="blog-grid">
            {allPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-card-img">
                  <img src={post.image} alt={post.title} />
                </div>

                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  <Link to={`/blogs/${post.slug}`} className="blog-link">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;