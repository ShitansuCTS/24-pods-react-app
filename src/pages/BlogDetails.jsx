import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogData from "./BlogData";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found</h2>

        <Link to="/blogs" className="blog-btn">
          Back to Blog
        </Link>
      </div>
    );
  }

  const otherPosts = blogData.filter((item) => item.slug !== slug);

  const currentPost = blogData.filter((item) => item.slug === slug);

  const recentPosts =
    otherPosts.length >= 3
      ? otherPosts.slice(0, 3)
      : [...otherPosts, ...currentPost].slice(0, 3);

  return (
    <section className="blog-details-page">
      <div className="blog-container">
        <div className="blog-details-layout">

          {/* MAIN CONTENT */}
          <div className="blog-details-main">

            <div className="blog-details-image">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="blog-details-content">

              <span className="blog-category">
                {post.category}
              </span>

              <h1>{post.title}</h1>

              <div className="blog-meta blog-meta-details">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>

              {post.content.map((item, index) => {

                // HEADING
                if (item.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="blog-inner-heading"
                    >
                      {item.text}
                    </h2>
                  );
                }

                // SUB HEADING
                if (item.type === "sub-heading") {
                  return (
                    <h3
                      key={index}
                      className="blog-sub-heading"
                    >
                      {item.text}
                    </h3>
                  );
                }

                // BULLET
                if (item.type === "bullet") {
                  return (
                    <p
                      key={index}
                      className="blog-bullet"
                    >
                      {item.text}
                    </p>
                  );
                }

                // STATS SECTION
                if (item.type === "stats") {
                  return (
                    <div
                      key={index}
                      className="blog-stats-section"
                    >
                      {item.items.map((stat, i) => (
                        <div
                          className="blog-stat-box"
                          key={i}
                        >
                          <h2>{stat.number}</h2>

                          {stat.lines.map((line, lineIndex) => (
                            <p key={lineIndex}>
                              {line}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                }

                // TABLE
                if (item.type === "table") {
                  return (
                    <div
                      key={index}
                      className="blog-table-wrapper"
                    >
                      <table className="blog-table">

                        <thead>
                          <tr>
                            {item.headers.map((header, i) => (
                              <th key={i}>{header}</th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          {item.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>

                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>

                                  {cellIndex === 0 ? (
                                    <span className="table-tool">
                                      {cell}
                                    </span>

                                  ) : cell === "FREE" ||
                                    cell === "FREE TIER" ? (

                                    <span className="table-badge free">
                                      {cell}
                                    </span>

                                  ) : cell === "PAID" ? (

                                    <span className="table-badge paid">
                                      {cell}
                                    </span>

                                  ) : (
                                    cell
                                  )}

                                </td>
                              ))}

                            </tr>
                          ))}
                        </tbody>

                      </table>
                    </div>
                  );
                }
                // EPISODE LIST
if (item.type === "episode-list") {
  return (
    <div key={index} className="episode-list-wrapper">
      {item.items.map((episode, i) => (
        <div className="episode-card" key={i}>
          
          <span className="episode-number">
            {episode.ep}
          </span>

          <h3 className="episode-title">
            {episode.title}
          </h3>

          <a
            href="https://www.24pods.com.au/"
            className="episode-arrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            →
          </a>

        </div>
      ))}
    </div>
  );
}

                // DEFAULT PARAGRAPH
                return (
                  <p key={index}>
                    {item.text}
                  </p>
                );

              })}

              <p>
                Get started at{" "}

                <a
                  href="https://www.24pods.com.au/contact-us"
                  className="blog-contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </a>
              </p>

              <div style={{ textAlign: "right" }}>
                <Link
                  to="/blogs"
                  className="blog-btn back-btn"
                >
                  Back to All Blogs
                </Link>
              </div>

            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">

            <div className="sidebar-box">

              <h3>Recent Blogs</h3>

              {recentPosts.map((item) => (
                <Link
                  to={`/blogs/${item.slug}`}
                  className="sidebar-post"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div>
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                  </div>
                </Link>
              ))}

            </div>

          </aside>

        </div>
      </div>
    </section>
  );
};

export default BlogDetails;