import React from 'react';

const JoinForm = () => {
  return (
    <section className="join-form-section">
      <div className="join-form-container">
        {/* Left Illustration */}
        <div className="join-image">
          <img src="images/join-us.png" alt="Join Us Illustration" />
        </div>

        {/* Right Form (new iframe embed) */}
        <div className="form-content join-form">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/a5zbT6AJaQcLE8JA4OZC"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "3px",
            }}
            id="inline-a5zbT6AJaQcLE8JA4OZC"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="JoinForm"
            data-height="422"
            data-layout-iframe-id="inline-a5zbT6AJaQcLE8JA4OZC"
            data-form-id="a5zbT6AJaQcLE8JA4OZC"
            title="JoinForm"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
