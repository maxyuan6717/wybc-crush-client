import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SET_VAL } from "./redux/masterReducer";
import axios from "axios";
import { casCheck } from "./util/api";
import Landing from "./pages/Landing";
import Write from "./pages/Write";
import Done from "./pages/Done";
import Letter from "./pages/Letter";
import Invites from "./pages/Invites";
import styles from "./App.module.css";
import heart from "./assets/pixel_heart.png";
import logo from "./assets/wybc_logo.png";

function App() {
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const onMount = async () => {
      const auth = await casCheck();
      // console.log(auth);
      if (
        !auth ||
        !auth.data.auth ||
        !auth.data.user ||
        !auth.data.user.studentId
      ) {
        dispatch(SET_VAL("author_netId", null));
      } else {
        dispatch(SET_VAL("author_netId", auth.data.user.netId));
        dispatch(SET_VAL("studentId", auth.data.user.studentId));
      }
    };
    onMount();
  }, [dispatch]);

  return (
    <>
      <div
        className="mx-auto mb-2 mt-2 d-block d-md-none justify-content-center"
        style={{ width: "100vw" }}
      >
        <Row className="mx-auto">
          <Col className="p-0" xs={1} />
          <Col xs={10} className="px-2">
            <Row className="mx-auto justify-content-between">
              <a href="https://wybc.com/" className="my-auto">
                <img
                  src={logo}
                  height={30}
                  style={{ display: "block" }}
                  alt="logo"
                />
              </a>
              <span
                className={styles.crush + " my-auto"}
                style={{ fontWeight: "700", fontSize: "28px" }}
              >
                C R U S H
              </span>
              <img
                src={heart}
                width={30}
                height={30}
                className="my-auto"
                alt="heart"
              />
            </Row>
          </Col>
        </Row>
      </div>
      <Row className={styles.container + " mx-auto"}>
        <Col xs={1} className="p-0 d-block d-md-none" />
        <Col
          xs={1}
          className={`${styles.title} ${styles.crush} ml-1 p-0 d-none d-md-block`}
        >
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
          <Col className={styles.crush_btn + " px-0"}>
            <a href="https://wybc-crush.live" style={{ color: "inherit" }}>
              <Row className="mx-auto justify-content-center">C</Row>
              <Row className="mx-auto justify-content-center">R</Row>
              <Row className="mx-auto justify-content-center">U</Row>
              <Row className="mx-auto justify-content-center">S</Row>
              <Row className="mx-auto justify-content-center">H</Row>

              <Row
                className="mx-auto pb-3 justify-content-center"
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
            </a>
          </Col>
        </Col>
        <Col xs={10} className="px-2">
          <Router>
            <Switch>
              <Route exact path="/write" component={Write} />
              <Route path="/done" component={Done} />
              <Route path="/letter/:id" component={Letter} />
              <Route path="/invites/:id" component={Invites} />
              <Route path="/" component={Landing} />
            </Switch>
          </Router>
        </Col>
      </Row>
    </>
  );
}

export default App;
