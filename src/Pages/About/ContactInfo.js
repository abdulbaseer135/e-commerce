import React from 'react'
import './ContactInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';




const ContactInfo = () => {
  return (
    <div>
      <div className="contact-section">
      <h2>GET IN TOUCH</h2>
      <div className="contact-info-container">
        <div className="contact-info">
            <div className="icon">
              <button>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </button>
            </div>
            <p>H-10 Islamabad Pakistan </p>
        </div>
        <div className="contact-info">
        <button>
        <FontAwesomeIcon icon={faPhone} />
        </button>
                
                <p>+923451903405 </p>
            </div><div className="contact-info">
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
            <p>mail@domain.com </p>
          </div>
      </div>
      <h3>FOLLOW US</h3>
      <div className="follow-us">
        <a href="#">
           <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
           <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="#">
           <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    </div>
  )
}

export default ContactInfo
