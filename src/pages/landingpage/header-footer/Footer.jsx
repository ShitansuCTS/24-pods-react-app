import logo from "/images/24Pods-Logo_transparent.png";
export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftrwrap footer-logo">
         {/* LOGO */}
          <div className="ftrbrand">
            <a href="/" className="ftrlogo">
               <img src={logo} alt="24Pods Logo" className="logo-img" />
            </a>
          </div>

        <div className="ftrtop">

          {/* LOCATION */}
          <div className="ftrinfo">
            <h4>Location</h4>
            <p><i className="fa-solid fa-location-dot"></i> Sydney, NSW, Australia</p>
          </div>

          {/* CONTACT */}
          <div className="ftrinfo">
            <h4>Contact</h4>
            <a href="tel:+61 416 461 094">
              <i className="fa-solid fa-phone"></i> +61 416 461 094
            </a>
          </div>
          {/* Email */}
          <div className="ftrinfo">
            <h4>Email</h4>
            <a href="mailto:alaka.satapathy@digiware.com.au">
              <i className="fa-solid fa-envelope"></i> alaka.satapathy@digiware.com.au
            </a>
          </div>

          {/* SOCIAL */}
          <div className="ftrinfo">
            <h4>Follow Us</h4>

            <div className="ftrsocial">
              <a href="https://www.instagram.com/24pods1?utm_source=qr&igsh=MWw1d21lMHJkNmJqcQ%3D%3D" className="social-btn">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/people/24-Pods/61579069562747/" className="social-btn">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/108916453/admin/dashboard/" className="social-btn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/@24pods" className="social-btn">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="ftrbot">
          <p>Copyright © 2026 All rights reserved by <a className="footer-link" href="https://digiware.com.au/">Digiware Digital</a></p>
        </div>

      </div>
    </footer>
  );
}