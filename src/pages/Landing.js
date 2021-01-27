import React, { useEffect, useState } from "react";
import { Row, Col, Fade } from "react-bootstrap";
import styles from "./Landing.module.css";
import heart from "../assets/pixel_heart.png";
import logo from "../assets/wybc_logo.png";
import { fetchStudents } from "../util/api";
import { SET_VAL } from "../redux/masterReducer";
import { useSelector, useDispatch } from "react-redux";
import { Base } from "../util/base";
import AsyncSelect from "react-select/async";
import { StyledBtn } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { select_styles } from "../util/select_styles";

const Landing = () => {
  const dispatch = useDispatch();
  const stateVal = useSelector((state) => state.state);
  const [loadingState, setLoadingState] = useState(0);
  // On mount
  useEffect(() => {
    const onMount = async () => {
      dispatch(SET_VAL("isLoading", true));
      setLoadingState(0);
      if (stateVal.author_netId) {
        let studentList = await fetchStudents();
        dispatch(SET_VAL("studentList", studentList));
      }
      setLoadingState(1);
      dispatch(SET_VAL("isLoading", false));
    };
    if (stateVal.author_netId !== -1) onMount();
  }, [dispatch, stateVal.author_netId]);

  const filterStudents = (inputValue) => {
    return stateVal.studentList.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterStudents(inputValue));
    }, 1000);
  };

  const onInputChange = (e) => {
    dispatch(SET_VAL("recipient_email", e ? e.value : ""));
    dispatch(SET_VAL("recipient_name", e ? e.label : ""));
  };

  return (
    <Row className={styles.container + " mx-auto"}>
      <Col xs={1} className={`${styles.title} ${styles.crush} ml-1 p-0`}>
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
          <img
            src={heart}
            width={35}
            height={35}
            className="mx-auto"
            alt="heart"
          />
        </Row>
      </Col>
      <Col xs={10} className="px-2">
        <Row className="mx-auto" style={{ height: "100%" }}>
          <div
            className="m-auto py-3"
            style={{ width: "500px", maxWidth: "500px" }}
          >
            <Row className={`mx-auto ${styles.header}`}>HEADER TEXT</Row>
            <Row className={`mx-auto my-2 ${styles.description}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vestibulum lorem sed risus ultricies tristique nulla aliquet enim
              tortor. In pellentesque massa placerat duis ultricies lacus sed.
              Augue interdum velit euismod in pellentesque. Volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum.
            </Row>

            {!loadingState ? (
              "loading..."
            ) : stateVal.author_netId ? (
              <>
                <Row className="mx-auto mb-3">
                  <div style={{ width: "100%" }}>
                    <AsyncSelect
                      loadOptions={loadOptions}
                      placeholder="Type in a recipient's name..."
                      autoFocus
                      onChange={onInputChange}
                      isClearable={true}
                      value={
                        stateVal.recipient_email
                          ? {
                              value: stateVal.recipient_email,
                              label: stateVal.recipient_name,
                            }
                          : null
                      }
                      styles={select_styles}
                    />
                  </div>
                </Row>
                <Fade in={stateVal.recipient_email}>
                  <Row
                    className="mx-auto"
                    style={{
                      pointerEvents: stateVal.recipient_email ? null : "none",
                    }}
                  >
                    <Link to="/write" style={{ width: "100%" }}>
                      <StyledBtn className="d-flex justify-content-center">
                        Invite →
                      </StyledBtn>
                    </Link>
                  </Row>
                </Fade>
              </>
            ) : (
              <StyledBtn
                className="mt-3 d-flex justify-content-center"
                onClick={() => {
                  window.location.href = `${Base}/auth/cas`;
                }}
              >
                Login with CAS
              </StyledBtn>
            )}
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Landing;
