import React, { useState } from "react";
import ReactPlayer from "react-player";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("match");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <div className="header">
        <h1>VISUAL PLAYBACK</h1>
        <div className="lead-info">
          <p>LEAD ID: ______________________________</p>
          <p>LEAD ID Created: ______________________________</p>
        </div>
      </div>
      <div className="content">
        <div className="video-player">
          <ReactPlayer
            url="your-video-url.mp4"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="form-container">
          <div className="tabs">
            <button
              className={activeTab === "match" ? "active" : ""}
              onClick={() => setActiveTab("match")}
            >
              Match Data
            </button>
            <button
              className={activeTab === "audit" ? "active" : ""}
              onClick={() => setActiveTab("audit")}
            >
              Audit Results
            </button>
            <button
              className={activeTab === "faq" ? "active" : ""}
              onClick={() => setActiveTab("faq")}
            >
              FAQs
            </button>
          </div>
          {activeTab === "match" && (
            <div className="form-section">
              <label>First Name</label>
              <input type="text" />

              <label>Last Name</label>
              <input type="text" />

              <label>Phone</label>
              <input type="text" />

              <label>Email ID</label>
              <input type="email" />

              <label>
                To see if additional fields match, enter the data values in the
                field below
              </label>
              <input type="text" />
              <button>Add Field</button>

              <div className="match-options">
                <div className="option">
                  <input type="checkbox" />
                  <label>Match</label>
                </div>
                <div className="option">
                  <input type="checkbox" />
                  <label>No Match</label>
                </div>
              </div>

              <div className="playback-overlay">
                <input type="checkbox" />
                <label>Visual Playback Data Overlay</label>
              </div>
            </div>
          )}
          {activeTab === "audit" && (
            <div className="form-section">
              <h2>Audit Results</h2>
              <p>Audit result details go here...</p>
            </div>
          )}
          {activeTab === "faq" && (
            <div className="form-section">
              <h2>FAQs</h2>
              <p>Frequently Asked Questions go here...</p>
            </div>
          )}
        </div>
      </div>
      <footer className="footer">
        <span
          className="disclosures-text"
          onClick={() => setShowModal(true)}
        >
          Disclosures Regarding this Visual Playback
        </span>
      </footer>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
