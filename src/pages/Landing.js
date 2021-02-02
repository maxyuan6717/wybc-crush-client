import React, { useEffect, useState } from "react";
import { Row, Fade } from "react-bootstrap";
import styles from "./Landing.module.css";
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
    <Row className="mx-auto" style={{ height: "100%" }}>
      <div
        className={`${window.innerWidth >= 768 ? "m-auto" : "mx-auto"} py-3`}
        style={{ width: "500px", maxWidth: "500px" }}
      >
        {stateVal.studentId !== "none" && (
          <Row className="mx-auto mb-4 justify-content-end">
            <Link
              to={`/invites/${stateVal.studentId}`}
              className={styles.invites}
              style={{ width: window.innerWidth >= 768 ? null : "100%" }}
            >
              <StyledBtn
                style={{
                  fontSize: "12px",
                }}
              >
                &nbsp;&nbsp;My Invitations&nbsp;&nbsp;
              </StyledBtn>
            </Link>
          </Row>
        )}

        <Row className={`mx-auto ${styles.header}`}>Love is in the Air</Row>
        <Row className={`mx-auto my-2 ${styles.description}`}>
          Can't stop thinking about that special someone? Too shy to reach out
          to your friend-crush? Is there someone you think should have won the
          Sexiest WYBCx Member poll?
          <br />
          <br />
          Now's your chance to let them know how you feel! Transgress your
          lovelorn stress with finesse by inviting them to the WYBC Valentine's
          Day Show!
        </Row>

        {!loadingState ? (
          "loading..."
        ) : stateVal.author_netId ? (
          <>
            <Row className="mx-auto mb-3">
              <div style={{ width: "100%" }}>
                <AsyncSelect
                  loadOptions={loadOptions}
                  placeholder="Who are you inviting?"
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
            <Fade in={stateVal.recipient_email.length > 0}>
              <Row
                className="mx-auto"
                style={{
                  pointerEvents: stateVal.recipient_email ? null : "none",
                }}
              >
                <Link to="/write" style={{ width: "100%" }}>
                  <StyledBtn className="d-flex justify-content-center">
                    Start Invite →
                  </StyledBtn>
                </Link>
              </Row>
            </Fade>
          </>
        ) : (
          <StyledBtn
            className="mt-3"
            onClick={() => {
              window.location.href = `${Base}/auth/cas`;
            }}
          >
            Login with CAS
          </StyledBtn>
        )}
      </div>
    </Row>
  );
};

export default Landing;
