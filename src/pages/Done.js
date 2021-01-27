import React from "react";
import { Row } from "react-bootstrap";
import { StyledBtn } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import styles from "./Done.module.css";

const Done = () => {
  return (
    <Row className="mx-auto" style={{ height: "100%" }}>
      <div className="m-auto">
        <Row className={`mx-auto mb-3 ${styles.header}`}>
          Your invitation has been sent!
        </Row>
        <Link to="/">
          <StyledBtn>← Send another invite </StyledBtn>
        </Link>
      </div>
    </Row>
  );
};

export default Done;
