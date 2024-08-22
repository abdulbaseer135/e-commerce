import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import "./ContactInfo.css";
import AboutData from "../../Components/Assets/AboutData";
import ContactInfo from "./ContactInfo";

const About = () => {
  const { history, mission, clients, values, team, testimonials } = AboutData;

  const [startIndex, setStartIndex] = useState(0);
  const visibleClients = clients.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex < clients.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="about-us-page">
      <section className="company-history">
        <h2>{history.title}</h2>
        <div className="text-block">
          <p>{history.content}</p>
        </div>
      </section>
      <div className="mission-values">
        <section className="our-values">
          <h2>{mission.title}</h2>
          <div className="text-block">
            <p>{mission.content}</p>
          </div>
        </section>
        <section className="our-values">
          <h2>{values.title}</h2>
          <div className="text-block">
            <p>{values.content}</p>
          </div>
        </section>
      </div>

      <h2 className="heading1">Our Clients</h2>
      <section className="our-clients11">
        <div className="arrows">
          <button onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className="client-list">
          {visibleClients.map((client) => (
            <div className="our-client1" key={client.id}>
              <div id="box">
                <div className="in">
                  <img className="in-img" src={client.src} alt={client.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>

      <section className="our-team">
        <h2 className="heading1">Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="column">
              <div className="card">
                <img src={member.img} alt="Jane" style={{ width: "100%" }} />
                <div className="container">
                  <h2>Jane Doe</h2>
                  <h5 className="title">CEO & Founder</h5>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>jane@example.com</p>
                  <p>
                    <button className="button">Contact Us</button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <h2 className="heading1">What Our Clients Say</h2>
      <section className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div>
              <img src={testimonial.image} alt="" />
              <h3>{testimonial.author}</h3>
            </div>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </section>

      <ContactInfo />
    </div>
  );
};

export default About;
