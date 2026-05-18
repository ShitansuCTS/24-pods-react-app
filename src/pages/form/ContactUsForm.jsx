import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4wdm6ur', 'template_8a0cmfe', form.current, {
        publicKey: 'QqczI38sL9rl5jExp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail} className="contact-form">
    //   <div className="form-group">
    //     <label>Full Name <span>*</span></label>
    //     <input type="text" name="form_name" required />
    //   </div>

    //   <div className="form-group">
    //     <label>Email Id <span>*</span></label>
    //     <input type="email" name="form_email" required />
    //   </div>

    //   <div className="form-group">
    //     <label>Phone No <span>*</span></label>
    //     <input type="tel" name="form_phone" required />
    //   </div>

    //   <div className="form-group">
    //     <label>Messages</label>
    //     <textarea name="message" rows="5" />
    //   </div>

    //   <button type="submit" className="button menu-button mt-6 help-button memberform-btn" style={{marginBottom:"0"}}>Submit</button>
    // </form>
     <div className="external-form">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/aPzDApwbenEq8zjpPoAb"
        style={{ width: "100%", height: "500px", border: "none", borderRadius: "3px" }}
        id="inline-aPzDApwbenEq8zjpPoAb"
        title="Form 0"
      ></iframe>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
};
