import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { fetchUserCards } from "../util/api";
import Invite from "../components/Invite";
import { StyledBtn } from "../components/StyledComponents";
import { Link } from "react-router-dom";

const Invites = () => {
  const stateVal = useSelector((state) => state.state);
  const [userCards, setUserCards] = useState([]);
  useEffect(() => {
    const onMount = async () => {
      let fetchedCards = await fetchUserCards(stateVal.studentId);
      fetchedCards.reverse();
      setUserCards(fetchedCards);
    };
    onMount();
  }, [stateVal]);

  return (
    <>
      <Row className="mx-auto mt-4">
        <div className="mx-auto" style={{ width: "500px", maxWidth: "500px" }}>
          <Row className="mx-auto">
            <Link to="/" style={{ display: "block", width: "80px" }}>
              <StyledBtn style={{ fontSize: "12px" }}>← Back</StyledBtn>
            </Link>
          </Row>
        </div>
      </Row>
      <Row className="mx-auto justify-content center">
        {userCards.map((invite, index) => (
          <Row
            className={`mt-4 mx-auto ${
              index === userCards.length - 1 ? "mb-4" : ""
            }`}
            style={{ width: "100%" }}
          >
            <Invite
              key={index}
              recipient={invite.recipient_name}
              message={invite.message}
              author={invite.author_name}
            />
          </Row>
        ))}
      </Row>
    </>
  );
};

export default Invites;
