import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                Welcome to a world of exceptional experiences at LoremCar. Our commitment to quality and customer satisfaction sets us apart in the car rental industry. With a diverse range of well-maintained vehicles and a team dedicated to delivering the utmost in convenience and excellence, we ensure that your every journey is remarkable. Whether you're traveling for business or leisure, our mission is to make your trips unforgettable. We take pride in our reliability and the personal touch we add to your travel. With us, you can trust that every ride will be smooth, comfortable, and memorable. Explore the roads with confidence, knowing that LoremCar is your premier car rental service.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <div className="section__description-group">
                  <p className="section__description">
                    <i className="ri-check-line"></i> Convenience and Excellence
                  </p>
                  <p className="section__description">
                    <i className="ri-check-line"></i> Smooth and Memorable Rides
                  </p>
                </div>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <div className="section__description-group">
                  <p className="section__description">
                    <i className="ri-check-line"></i> Quality and Satisfaction
                  </p>
                  <p className="section__description">
                    <i className="ri-check-line"></i> Well-Maintained Vehicles
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
