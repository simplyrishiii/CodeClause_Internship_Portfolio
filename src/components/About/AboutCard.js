import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishi Sen </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            A frontend developer and a keen learner.
            <br />
            I am an undergrad student at MUJ (MANIPAL UNIVERSITY, JAIPUR), pursuing Bachelor's in Computer Science.
            <br />
            <br />
            Apart from coding, a few activities that I like doing are!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going through tech trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is a slow process and quitting doesn't speed it up!"{" "}
          </p>
          <footer className="blockquote-footer">Rishi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
