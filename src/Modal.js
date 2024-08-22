import React from "react";
import "./Modal.css";

function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Disclosures Regarding this Visual Playback</h2>
        <p>
          Jornaya's Visual Playback uses data captured during a Lead Event to render a virtual visual playback 
          (not an actual visual recording) of the Lead Event for the purpose of verifying for an authorized 
          requestor (a) whether certain content was displayed on a Web page during the Lead Event (e.g., a 
          request for consent to contact the user following the Lead Event) and (b) certain user actions 
          exhibited during the Lead Event (e.g., what consent the user gave regarding contacting the user, 
          if any). Jornaya does not warrant that the data associated with a Lead Event which is necessary 
          to render a visual playback can be captured and stored for every Lead Event, and in certain instances 
          data associated with a Lead Event may be captured and stored, but a visual playback cannot be rendered. 
          Use of the Visual Playback is subject to Jornaya's Terms of Use (TOU), Client Privacy Policy, and 
          Consumer Privacy Policy, available through our website at www.jornaya.com.
        </p>
        <p>
          All rights reserved. All aspects of the service provided by Jornaya hereunder — including, e.g., the 
          Visual Playback player, the Jornaya Web site, and the processes used by Jornaya in providing the service 
          — are the exclusive property of Jornaya and its licensors. The Visual Playback and the data made available 
          through its use are subject to confidentiality obligations at all times. By accessing and using the service 
          provided hereunder, you represent and warrant that you have the authority to act on behalf of a valid 
          subscriber to the service, that you shall use the service in compliance with the terms and conditions on 
          which it is provided, and that you shall use any data made available through the use of the service for 
          its intended purposes only.
        </p>
      </div>
    </div>
  );
}

export default Modal;
