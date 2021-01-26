import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Landing.module.css";
import heart from "../assets/pixel_heart.png";
import logo from "../assets/wybc_logo.png";
import AsyncSelect from "react-select/async";
import { fetchStudents } from "../util/api";
import { SET_VAL } from "../redux/masterReducer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Base } from "../util/base";

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
    if (stateVal.auth_netId !== -1) onMount();
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
          <img src={heart} width={35} className="mx-auto" alt="heart" />
        </Row>
      </Col>
      <Col xs={10} className="p-0">
        <Row className="mx-auto" style={{ height: "100%" }}>
          <div className="m-auto">
            {!loadingState ? (
              "loading..."
            ) : stateVal.author_netId ? (
              <div style={{ width: "400px" }}>
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
                />
              </div>
            ) : (
              <div
                onClick={() => {
                  window.location.href = `${Base}/auth/cas`;
                }}
              >
                Login with CAS
              </div>
            )}
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Landing;
