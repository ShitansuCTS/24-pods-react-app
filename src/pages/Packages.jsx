import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Check, X, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaCheck, FaTimes, FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';





const packages = [
{
    name: "Edit Only",
    price: "$450 + GST",
    highlight: false,
    features: [
      { label: "Shoot Included", value: "Not included", ok: false },
      { label: "Editing", value: "Basic clean edit", ok: true },
      { label: "Reels Included", value: "2", ok: true },
      { label: "Platform Posting", value: "Files sent to Client only", ok: false },
      { label: "Copywriting", value: "Not included", ok: false },
      { label: "Thumbnail Design", value: "Not included", ok: false },
      { label: "SEO Optimization", value: "Not included", ok: false },
      { label: "Branded Intro / Outro", value: "Light branding only", ok: true },
      { label: "Newsletter Copy", value: "Not included", ok: false },
      { label: "Delivery", value: "Files sent (MP4 + MP3)", ok: true }
    ],
    addons: "Instagram Boost – $150"
  },
  {
    name: "Edit + Marketing(Edit Plus)",
    price: "$800 + GST",
    highlight: true,
    features: [
      { label: "Shoot Included", value: "Not included", ok: false },
      { label: "Editing", value: "full Video & audio", ok: true },
      { label: "Reels Included", value: "5", ok: true },
      { label: "Platform Posting", value: "Instagram, LinkedIn, YouTube, TikTok", ok: true },
      { label: "Copywriting", value: "Captions, titles & hashtags", ok: true },
      { label: "Thumbnail Design", value: "Not included", ok: false },
      { label: "SEO Optimization", value: "Included", ok: true },
      { label: "Branded Intro / Outro", value: "Included", ok: true },
      { label: "Newsletter Copy", value: "Optional", ok: true },
      { label: "Delivery", value: "Done-for-you & posted", ok: true }
    ],
    addons: "Instagram Boost – $150"
  },
    {
    name: "Shoot + Edit + Post",
    price: "$1250 + GST",
    highlight: false,
    features: [
      { label: "Shoot Included", value: "Up to 1.5 hr", ok: true },
      { label: "Editing", value: "Full video & audio", ok: true },
      { label: "Reels Included", value: "10", ok: true },
      { label: "Platform Posting", value: "All major platforms (Instagram, YouTube, Facebook, Spotify)", ok: true },
      { label: "Copywriting", value: "Captions, titles & hashtags", ok: true },
      { label: "Thumbnail Design", value: "Included", ok: true },
      { label: "SEO Optimization", value: "Not included", ok: false },
      { label: "Branded Intro / Outro", value: "Included", ok: true },
      { label: "Newsletter Copy", value: "Not included", ok: false },
      { label: "Delivery", value: "Done-for-you & posted", ok: true }
    ],
    addons: "Instagram Boost – $150"
  }
];

const Packages = () => {
   
  useEffect(() => {
          AOS.init({
              duration: 1000,
              once: false,
              mirror: true
          });
      }, []);

    return (
      <>
      <Helmet>
         <title>Complete Podcast Studio, Editing & Marketing Packages - 24 Pods</title>

  <meta
    name="description"
    content="Flexible packages designed to support your podcast creation, editing, and distribution goals. Explore full-service podcast solutions at 24 Pods-choose your plan today"
  />

  {/* ✅ Keywords Meta Tag */}
  <meta
    name="keywords"
    content=" Podcast studio and editing package, Podcast editing package, podcast editing rates, podcast studio and editing package deals, podcast production packages for small business, full-service podcast studio packages, podcast editing and studio rental packages, monthly podcast editing packages, podcast editing package pricing, custom podcast editing packages, compare podcast editing packages"
  />
              <link
                rel="canonical"
                href="https://www.24pods.com.au/packages"
              />
            </Helmet>
       <section>
         <div className="package-banner d-flex align-items-center justify-content-center text-center">
      <h1 className="package-title">Our Packages</h1>
    </div>
        
    


   <div className="packages-section">
      <div className="packages-container">
        <h2 className="packages-title">Podcast Marketing Packages</h2>
        <p className="packages-subtitle">
          Flexible packages designed to support your podcast creation, editing,
          and distribution goals.
        </p>

        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`package-card ${
                pkg.highlight ? "highlight" : ""
              }`}
            >
              {pkg.highlight && (
                <div className="badge">
                  <FaStar /> Most Popular
                </div>
              )}

              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">{pkg.price}</div>

              <ul className="features-list">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>
                   {f.ok ? (
  <FaCheck className="icon icon-check" />
) : (
  <FaTimes className="icon icon-cross" />
)}
                    <span>
                      <strong>{f.label}:</strong> {f.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="addon-box">
                <strong>Optional Add-on:</strong> {pkg.addons}
              </div>

              {/* <button className="package-btn">Choose Package</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>


       </section>
       </>
    );
};

export default Packages;
