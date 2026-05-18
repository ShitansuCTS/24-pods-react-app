import React from "react";

const PopupForm = ({ show, handleClose }) => {
  if (!show) return null; // hide when not active

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Close Button */}
        <button className="popup-close" onClick={handleClose}>
          ✖
        </button>

        {/* Scrollable iframe container */}
        <div
          style={{
            width: "100%",
            maxHeight: "80vh", // limit height to viewport
            overflowY: "auto", // enable scroll
          }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/cJuxu0y4MMd9E9MtD0x0"
            style={{
              width: "100%",
              height: "900px", // taller than container so scrolling works
              border: "none",
              borderRadius: "0px",
            }}
            id="inline-cJuxu0y4MMd9E9MtD0x0"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 2"
            data-height="756"
            data-layout-iframe-id="inline-cJuxu0y4MMd9E9MtD0x0"
            data-form-id="cJuxu0y4MMd9E9MtD0x0"
            title="Form 2"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
