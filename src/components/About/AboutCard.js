import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sakshi Kumari</span> 
            from <span className="purple">Buxar, Bihar, India.</span>
            <br /> I am a final year student pursuing BTech from <span className="purple">Chandigarh University</span> in Computer Science.
            <br />
            Additionally, I am a Coder on CodeChef and have solved 300 questions on LeetCode.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include working as a student member at IEEE Chandigarh University.
          </p>
          <p>I also love to do some activities such as:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sakshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
