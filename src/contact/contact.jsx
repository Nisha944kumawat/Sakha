// Contact.jsx

import "./contact.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1 className="contact-heading">
            Let's start a <br />
            <span>conversation</span>
          </h1>

          <p className="contact-description">
            Bulk enquiries, retail tie-ups, distributorship or just a hello —
            drop us a message and we'll get back within 24 hours.
          </p>

          {/* EMAIL BOX */}
          <div className="info-card">
            <div className="info-icon">
              <FiMail />
            </div>

            <div>
              <h5>EMAIL</h5>
              <p>info@sakhaspices.com</p>
            </div>
          </div>

          {/* PHONE BOX */}
          <div className="info-card">
            <div className="info-icon">
              <FiPhone />
            </div>

            <div>
              <h5>PHONE</h5>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* LOCATION BOX */}
          <div className="info-card">
            <div className="info-icon">
              <FiMapPin />
            </div>

            <div>
              <h5>LOCATION</h5>
              <p>Rajasthan, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-box">
          <h2>Send a Message</h2>

          <p className="form-subtitle">
            Fill out the form and our team will respond shortly.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label>FULL NAME *</label>
              <input type="text" placeholder="Rajesh Sharma" />
            </div>

            <div className="double-fields">
              <div className="form-group">
                <label>EMAIL ADDRESS *</label>
                <input type="email" placeholder="raj@example.com" />
              </div>

              <div className="form-group">
                <label>PHONE NUMBER *</label>
                <input type="text" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="form-group">
              <label>ENQUIRY TYPE *</label>

              <select>
                <option>Select a category...</option>
                   <option>Bulk / B2B Order</option>
                   <option>Distributoeship</option>
                   <option>Retail Enquiry</option>
                   <option>Export Enquiry</option>
                   <option>Product Feedback</option>
                   <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>MESSAGE *</label>

              <textarea
                rows="5"
                placeholder="Tell us about your requirement — product, quantity, location..."
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              <span className="dot"></span>
              Send Message
              <FiArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;