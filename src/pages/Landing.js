import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Landing.module.css";
import heart from "../assets/pixel_heart.png";
import logo from "../assets/wybc_logo.png";

const Landing = () => {
  return (
    <Row className={styles.container + " mx-auto"}>
      <Col xs={1} className={`${styles.title} ${styles.crush} pl-1`}>
        <Row className={`mx-auto justify-content-center mt-4 ${styles.logo}`}>
          <a href="https://wybc.com/">
            <img
              src={logo}
              width={32}
              className="mx-auto"
              style={{ display: "block" }}
              alt="logo"
            />
          </a>
        </Row>
        <Row className="mx-auto justify-content-center">C</Row>
        <Row className="mx-auto justify-content-center">R</Row>
        <Row className="mx-auto justify-content-center">U</Row>
        <Row className="mx-auto justify-content-center">S</Row>
        <Row className="mx-auto justify-content-center">H</Row>
        <Row
          className="mx-auto justify-content-center"
          style={{ marginTop: "15px" }}
        >
          <img src={heart} width={35} className="mx-auto" alt="heart" />
        </Row>
      </Col>
    </Row>
  );
};

export default Landing;
