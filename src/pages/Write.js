import React, { useState } from "react";
import { SET_VAL } from "../redux/masterReducer";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { StyledTextArea, StyledBtn } from "../components/StyledComponents";
import styles from "./Write.module.css";
import { Link } from "react-router-dom";

const Write = ({ history }) => {
  const dispatch = useDispatch();
  const stateVal = useSelector((state) => state.state);
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  if (!stateVal.recipient_email) {
    history.push("/");
  }
  return (
    <Row className="mx-auto" style={{ height: "100%" }}>
      <Col sm={6} className="d-flex flex-column">
        <div className="mt-5">
          <Link to="/" style={{ display: "block", width: "80px" }}>
            <StyledBtn style={{ fontSize: "14px" }}>← Back</StyledBtn>
          </Link>
          <Row className={`mx-auto mb-2 mt-4 ${styles.header}`}>Message:</Row>
          <Row className="mx-auto mb-4">
            <StyledTextArea
              rows={5}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Row>
          <Row className={`mx-auto mb-2 ${styles.header}`}>From:</Row>
          <Row className="mx-auto mb-4">
            <StyledTextArea
              rows={1}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              style={{ resize: "none" }}
            />
          </Row>
        </div>
      </Col>
      <Col sm={6} className="d-flex flex-column">
        <div className="mt-5">
          <div className={`${styles.letter}`}>
            <Row className="mx-auto">
              Dear{" "}
              {stateVal.recipient_name && stateVal.recipient_name.split(" ")[0]}
              ,
            </Row>
            <Row className="mx-auto mt-4">
              &emsp;DEFAULT MESSAGE. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Row>
            {message.length > 0 && (
              <Row className="mx-auto mt-4">&emsp;{message}</Row>
            )}
            <Row className="mx-auto mt-4 justify-content-end">
              &emsp;Sincerely,
            </Row>
            <Row className="mx-auto justify-content-end">
              {author.length === 0 ? "Anonymous ;)" : author}
            </Row>
          </div>
          <Link to="/done" style={{ width: "100%" }}>
            <StyledBtn className="mt-3 mb-4">Send Invite →</StyledBtn>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Write;
