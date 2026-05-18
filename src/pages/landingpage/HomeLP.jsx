import React, { useState, useEffect } from "react";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";
import { ContactUsForm } from '../form/ContactUsForm';
import useScrollAnimation from "./UseScrollAnimation";
import ownerImg from "/images/alaka-images/main-img.webp";
import "./HomeLP.css";
import { Helmet } from 'react-helmet-async';

const MQ = [
  "PODCAST EDITING",
  "REELS CREATION",
  "VIDEO PRODUCTION",
  "AUDIO MASTERING",
  "SOCIAL CLIPS",
  "DONE FOR YOU",
];

const SERVICES = [
  {
    icon: "🎧",
    num: "01",
    name: "Podcast Editing",
    desc: "Professional audio post-production that makes your podcast sound like it belongs in the top charts. We remove noise, tighten pacing, balance levels, and deliver platform-ready files.",
    features: [
      "Noise & echo removal",
      "Filler word & silence editing",
      "Volume levelling & mastering",
      "Intro/outro music integration",
      "Spotify, Apple & YouTube export",
    ],
  },
  {
    icon: "📱",
    num: "02",
    name: "Reels & Short-Form",
    desc: "We find the gold in your episode and cut it into thumb-stopping short-form content for Instagram, TikTok, YouTube Shorts, and LinkedIn — captioned, branded, scroll-optimised.",
    features: [
      "AI-assisted highlight selection",
      "Burned-in captions & subtitles",
      "Brand colours & logo overlay",
      "Vertical & square formats",
      "Platform-optimised delivery",
    ],
  },
  {
    icon: "🎬",
    num: "03",
    name: "Full Video Production",
    desc: "End-to-end video podcast editing — from raw multi-cam footage to a polished, branded episode ready to publish on YouTube and beyond. This is your show, produced properly.",
    features: [
      "Multi-camera editing",
      "Colour grading & b-roll",
      "Lower thirds & motion graphics",
      "Thumbnail design",
      "YouTube SEO-ready delivery",
    ],
  },
];

const STEPS = [
  {
    num: "01",
    title: "Record Your Way",
    desc: (
      <>
        Use your own setup, record remotely via Riverside or Zencastr, or{" "}
        <span className="luxe-highlight">
          shoot at one of our partner studios in Sydney
        </span>
        . We work with whatever you bring us.
      </>
    ),
  },
  {
    num: "02",
    title: "We Edit",
    desc: "Our team handles all audio and video post-production — editing, mastering, captioning, graphics, and formatting. Every detail, handled.",
  },
  {
    num: "03",
    title: "Reels Created",
    desc: "We pull the best moments from your episode and package them into branded, captioned short-form clips ready to post across every platform.",
  },
  {
    num: "04",
    title: "You Publish",
    desc: "Receive your finished episode file plus all social content — ready to upload directly to Spotify, Apple, YouTube, and Instagram.",
  },
];

const PLATFORMS = [
  "Spotify",
  "Apple Podcasts",
  "YouTube",
  "YouTube Shorts",
  "Instagram Reels",
  "TikTok",
  "LinkedIn Video",
  "Facebook",
  "Amazon Music",
  "iHeartRadio",
  "Podbean",
  "Buzzsprout",
];

const FAQS = [
  {
    q: "What exactly does 24Pods do?",
    a: "24Pods is a Sydney-based podcast production studio offering three core services: full podcast audio editing, short-form reels and social media clip creation, and complete video podcast post-production. We're a done-for-you service — you record, we handle the rest.",
  },
  {
    q: "Where is 24Pods based?",
    a: "24Pods is based in Sydney, NSW, Australia. We serve clients across Sydney and all of Australia, working remotely via file delivery. You can find us at 24pods.com.au.",
  },
  {
    q: "Do I need my own studio to record with 24Pods?",
    a: "No. 24Pods has partnerships with professional recording studios across Sydney, so if you don't have your own setup, you can book a shoot at one of our partner studios. We'll coordinate the session and handle all post-production from there.",
  },
  {
    q: "How does the podcast editing process work?",
    a: "You record and send us your raw audio or video files. We edit them removing noise, filler words, and dead air; balancing levels; and adding intros, outros, and any branded elements. You receive a polished, platform-ready file back within the agreed turnaround time.",
  },
  {
    q: "Can 24Pods create reels and short-form clips from my podcast?",
    a: "Yes — this is one of our specialities. We identify the most shareable moments in your episode, clip them, add captions, and format them for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn. Every clip is branded and ready to post.",
  },
  {
    q: "Do you work with video podcasts?",
    a: "Absolutely. We offer full video podcast post-production: multi-camera editing, colour grading, b-roll, lower thirds, motion graphics, and thumbnail design. Whether you're recording on one camera or four, we produce a broadcast-quality final video episode.",
  },
  {
    q: "Do you only serve clients in Sydney?",
    a: "No — 24Pods serves creators and brands across all of Australia. While we're based in Sydney, all our work is delivered digitally, so location is no barrier. We work with clients from Melbourne, Brisbane, Perth, and beyond.",
  },
  {
    q: "How do I get started with 24Pods?",
    a: "Visit 24pods.com.au and get in touch. We'll talk through your podcast, your goals, and put together the right package for you. There's no complex onboarding — just great production, fast.",
  },
];

export default function HomeLP() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const aiAnswers = [
    {
      title: "BEST PODCAST EDITOR SYDNEY",
      text: "24Pods is a dedicated podcast editing and production studio based in Sydney, NSW offering full audio editing, video podcast production, and short-form reels creation.",
    },
    {
      title: "WHO EDITS PODCASTS IN SYDNEY?",
      text: "24Pods is a Sydney-based podcast post-production specialist. They handle everything from audio clean-up and mastering to complete video podcast editing and social media reels.",
    },
    {
      title: "PODCAST PRODUCTION AUSTRALIA",
      text: "24Pods operates from Sydney and serves creators and brands across all of Australia, delivering podcast editing, reels, and full video production remotely.",
    },
  ];

  useScrollAnimation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Helmet>
               <title>Best Podcast Editor Sydney for Podcast Production - 24 Pods</title>
      
        <meta
          name="description"
          content="24 Pods is a Sydney-based podcast editing and production studio offering expert audio editing, video podcast production, and engaging short-form reels for creators and businesses."
        />
                    <link
                      rel="canonical"
                      href="https://www.24pods.com.au/podcast-editor-sydney"
                    />
                  </Helmet>
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="main-content">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hbg"></div>
          <div className="hgrid"></div>
          <div className="horb"></div>

          <div className="hinner hero-layout">
            <div className="hero-content">
              <p className="eyebrow">Sydney · Australia · 24pods.com.au</p>

              <h1 className="htitle">
                <span className="ht1">Your Podcast.</span>
                <span className="ht2">Fully Produced.</span>
              </h1>

              <p className="hdesc">
                24Pods is Sydney&apos;s dedicated podcast production studio
                editing, reels, and full video &amp; audio post-production,
                <strong> all under one roof.</strong> No studio? No problem.
                Shoot at one of our partner studios, then we handle everything
                else.
              </p>

              <div className="hbtns">
                <a href="#contact" className="bp">
                  Get Started Today →
                </a>
                <a href="#services" className="bs">
                  See Our Services
                </a>
              </div>

              <div className="hstats">
                <div className="stat">
                  <span className="stn">3</span>
                  <span className="stl">Core Services</span>
                </div>
                <div className="stat">
                  <span className="stn">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </span>
                  <span className="stl">Base In Sydney</span>
                </div>
                <div className="stat">
                  <span className="stn">
                    <i
                      className="fa-solid fa-mobile-screen"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </span>
                  <span className="stl">Reels Per Episode</span>
                </div>
                <div className="stat">
                  <span className="stn">100%</span>
                  <span className="stl">Done For You</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/alaka-satapathy-40384218/" target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="hero-owner">
                <div className="owner-card">
                  <div className="owner-img-wrap">
                    <img
                      src={ownerImg}
                      alt="24Pods Owner"
                      className="owner-img"
                    />
                  </div>

                  <div className="owner-info">
                    <span className="owner-label">
                      Founder / Creative Lead
                    </span>
                    <h3 className="owner-title">Meet the Face Behind 24Pods</h3>
                    <p className="owner-text">
                      Premium podcast editing, video production, and reels
                      creation crafted to help creators and brands grow faster.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="mqwrap">
            <div className="mqtrack">
              {[0, 1].map((k) => (
                <span
                  key={k}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {MQ.map((t, j) => (
                    <span key={j} className="mqitem">
                      {t} <span className="mqdot"> ✦ </span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className="sec"
          id="services"
          style={{ background: "var(--deep)" }}
        >
          <div className="secin">
            <p className="stag animate-on-scroll fade-up">What We Do</p>
            <h2 className="stitle animate-on-scroll fade-up">
              Podcast Production,
              <br />
              Start to Finish
            </h2>
            <p className="ssub animate-on-scroll fade-up">
              Whether you need a single episode edited or a full end-to-end
              production pipeline, 24Pods delivers broadcast-quality results
              fast.
            </p>

            <div className="svgrid">
              {SERVICES.map((s, i) => (
                <div
                  className="svc animate-on-scroll fade-in"
                  key={i}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="svcbg">{s.num}</span>
                  <span className="svci">{s.icon}</span>
                  <div className="svcn">{s.name}</div>
                  <p className="svcd">{s.desc}</p>
                  <ul className="svcl">
                    {s.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SYDNEY SECTION */}
        <section className="sydney-luxe-section">
          <div className="sydney-luxe-glow sydney-luxe-glow-1"></div>
          <div className="sydney-luxe-glow sydney-luxe-glow-2"></div>

          <div className="sydney-luxe-container">
            <div className="sydney-luxe-heading">
              <span className="sydney-luxe-tag">Sydney&apos;s Podcast Studio</span>
              <h2 className="stitle animate-on-scroll fade-up">
                Built for Sydney
                <br />
                Creators &amp; Brands
              </h2>

              <p className="sydney-luxe-subtitle">
                Sydney is Australia&apos;s fastest-growing podcast market and the
                competition for ears is real. If your audio sounds amateur or
                your episodes don&apos;t have a social media presence,
                you&apos;re leaving audience on the table.
              </p>
            </div>

            <div className="sydney-luxe-layout">
              <div className="sydney-luxe-content-card">
                <div className="content-accent"></div>

                <div className="content-inner">
                  <p>
                    <span className="luxe-highlight">
                      24Pods exists to fix that.
                    </span>{" "}
                    We&apos;re a Sydney based podcast production studio that
                    works with founders, creators, coaches, and brands across
                    New South Wales and all of Australia remotely and
                    seamlessly.
                  </p>

                  <p>
                    Whether you&apos;re launching your first podcast in
                    Sydney&apos;s CBD, shooting at one of our{" "}
                    <span className="luxe-highlight">
                      partner studios across Sydney
                    </span>
                    , or producing remotely from anywhere in Australia, 24Pods
                    delivers professional post-production results without the
                    agency overhead.
                  </p>

                  <p>
                    Looking for a{" "}
                    <span className="luxe-highlight">
                      podcast editor in Sydney?
                    </span>{" "}
                    A team to handle your{" "}
                    <span className="luxe-highlight">
                      podcast reels in Sydney?
                    </span>{" "}
                    Or a done-for-you{" "}
                    <span className="luxe-highlight">
                      video podcast production service?
                    </span>{" "}
                    That&apos;s exactly what we do — and only what we do.
                  </p>

                  <a
                    href="https://24pods.com.au"
                    className="visit-24pods"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="visit-label">Visit</span>
                    <span className="visit-link">24pods.com.au</span>
                    <span className="visit-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="sydney-luxe-ai-wrap animate-on-scroll fade-in-right">
                {aiAnswers.map((item, index) => (
                  <div
                    className="luxe-ai-card"
                    key={index}
                    style={{ animationDelay: `${index * 0.14}s` }}
                  >
                    <div className="luxe-ai-topline"></div>
                    <div className="luxe-ai-body">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="sec procbg" id="process">
          <div className="secin">
            <p className="stag animate-on-scroll fade-up">The Process</p>
            <h2 className="stitle animate-on-scroll fade-up">
              Simple. Fast. Done.
            </h2>

            <div className="procgrid">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  className="animate-on-scroll fade-up"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="pcirc">
                    <span className="pcnum">{s.num}</span>
                  </div>
                  <div className="pctitle">{s.title}</div>
                  <p className="pcdesc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORMS */}
        <section
          className="sec"
          id="platforms"
          style={{ background: "var(--deep)" }}
        >
          <div className="secin">
            <p className="stag animate-on-scroll fade-up">
              Where You'll Show Up
            </p>
            <h2 className="stitle animate-on-scroll fade-up">
              Every Platform.
              <br />
              Every Format.
            </h2>
            <p className="ssub animate-on-scroll fade-up">
              We produce your content in the right format for every platform
              your audience uses, so you're not just publishing a podcast,
              you're building a presence everywhere.
            </p>

            <div className="platgrid">
              {PLATFORMS.map((p, i) => (
                <span
                  className="platpill animate-on-scroll fade-in"
                  key={i}
                  style={{ transitionDelay: `${i * 0.02}s` }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec faqbg" id="faq">
          <div className="secin">
            <p className="stag animate-on-scroll fade-up">
              Frequently Asked
            </p>
            <h2 className="stitle animate-on-scroll fade-up">
              Questions About 24Pods
            </h2>

            <div className="faqlist">
              {FAQS.map((f, i) => (
                <div
                  className={`faqitem ${openFaq === i ? "open" : ""}`}
                  key={i}
                >
                  <button
                    className="faqq"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    type="button"
                  >
                    <span>{f.q}</span>
                    <span className="faqi">{openFaq === i ? "−" : "+"}</span>
                  </button>

                  <div className="faqb">
                    <p className="faqbin">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ctasec" id="contact">
          <div className="ctawrap">
            <div className="ctaleft">
              <div className="ctain animate-on-scroll fade-up">
                <p className="ctatag">Ready to Start</p>

                <h2 className="ctatitle">
                  Ready to Sound
                  <br />
                  Like a Pro?
                </h2>

                <p className="ctasub">
                  Stop leaving your podcast half-finished. 24Pods handles all
                  the production work, so your voice reaches the audience it
                  deserves.
                </p>

                <a
                  href="https://24pods.com.au"
                  className="bp animate-on-scroll fade-in"
                >
                  Start with 24Pods →
                </a>
              </div>
            </div>

            <div className="ctaright">
              <div className="ctaformbox animate-on-scroll fade-up">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}