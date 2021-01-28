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
        <Router>
          <Switch>
            <Route exact path="/write" component={Write} />
            <Route path="/done" component={Done} />
            <Route path="/letter/:id" component={Letter} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </Col>
    </Row>
  );
}

export default App;
