// Contact.jsx

import { useState } from "react";
import "./contact.css";
import { FiArrowRight} from "react-icons/fi";
import { IoIosContact,IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";


const Contact = () => {

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    message: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919314508970";

    const text = `
*New Contact Form Submission*

👤 Full Name: ${formData.name}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

📌 Enquiry Type: ${formData.enquiry}

📝 Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

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

          {/* CONTACT BOX */}
          <div className="info-card">
            <div className="info-icon">
              <IoIosContact />
            </div>

            <div>
              <h5>Director Proprietor</h5>
              <p>Mahesh Agarwal (Manager)</p>
            </div>
          </div>

          {/* PHONE BOX */}
          <div className="info-card">
            <div className="info-icon">
              <FaPhoneVolume />
            </div>

            <div>
              <h5>PHONE</h5>
              <p>+91 9314508970</p>
            </div>
          </div>

                    {/* PHONE BOX */}
          <div className="info-card">
            <div className="info-icon">
              <FaPhoneVolume />
            </div>

            <div>
              <h5>PHONE</h5>
              <p>+91 9024137851</p>
            </div>
          </div>

{/* MAIL BOX */}
<div className="info-card">
  <div className="info-icon">
    <IoMdMail />
  </div>

  <div>
    <h5>EMAIL</h5>
    <p>shyamsakhaindustries@gmail.com</p>
  </div>
</div>
          {/* LOCATION BOX */}
          <div className="info-card">
            <div className="info-icon">
              <MdLocationPin />
            </div>

            <div>
              <h5>LOCATION</h5>
              <p>SHYAM SAKHA INDUSTRIES PVT. LTD. <br/>
              Khasra No. 675,677,678, <br/>
             Village : Harota, Tehsil : Chomu,
            Dist.: Jaipur, Rajasthan-303702. (INDIA)</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-box">
          <h2>Send a Message</h2>

          <p className="form-subtitle">
            Fill out the form and our team will respond shortly.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>

            {/* FULL NAME */}
            <div className="form-group">
              <label>FULL NAME *</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Mahesh Agarwal"
                required
              />
            </div>

            {/* DOUBLE FIELDS */}
            <div className="double-fields">

              {/* EMAIL */}
              <div className="form-group">
                <label>EMAIL ADDRESS *</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="shyamsakha@gmail.com"
                  required
                />
              </div>

              {/* PHONE */}
              <div className="form-group">
                <label>PHONE NUMBER *</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9314508970"
                  required
                />
              </div>
            </div>

            {/* ENQUIRY TYPE */}
            <div className="form-group">
              <label>ENQUIRY TYPE *</label>

              <select
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                required
              >
                <option value="">Select a category...</option>
                <option>Bulk / B2B Order</option>
                <option>Distributorship</option>
                <option>Retail Enquiry</option>
                <option>Export Enquiry</option>
                <option>Product Feedback</option>
                <option>Other</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label>MESSAGE *</label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirement — product, quantity, location..."
                required
              ></textarea>
            </div>

            {/* BUTTON */}
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