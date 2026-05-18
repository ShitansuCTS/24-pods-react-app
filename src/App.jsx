import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import PopupForm from "./form/PopupForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutUs from "./pages/About_us";
import Help from "./pages/Help";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Guest from "./pages/Guest";
import Member from "./pages/Member";
import Reality from "./pages/Reality";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./pages/ScrollToTopButton";
import Packages from "./pages/packages";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import HomeLP from "./pages/landingpage/HomeLP";

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // ✅ check if current page is landing page
  const isLandingPage = location.pathname === "/podcast-editor-sydney";

  return (
    <>
      {/* ✅ Show main header only if NOT landing page */}
      {!isLandingPage && (
        <Header onOpenForm={() => setShowModal(true)} />
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-can-we-help" element={<Help />} />
          <Route path="/be-our-guest" element={<Guest />} />
          <Route path="/become-a-member" element={<Member />} />
          <Route path="/inspire-from-reality" element={<Reality />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />

          {/* ✅ Landing Page */}
          <Route
            path="/podcast-editor-sydney"
            element={<HomeLP />}
          />
        </Routes>
      </main>

      {/* ✅ Show main footer only if NOT landing page */}
      {!isLandingPage && <Footer />}

      <ScrollToTopButton />

      <PopupForm
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}
export default App;
