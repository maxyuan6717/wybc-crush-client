import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledBtn } from "../components/StyledComponents";
import { fetchCard, setOpened } from "../util/api";
import Invite from "../components/Invite";

const Letter = ({ match }) => {
  const letterId = match.params.id;
  const [letterContent, setLetterContent] = useState();

  useEffect(() => {
    const onMount = async () => {
      let fetchedCard = await fetchCard(letterId);
      if (fetchedCard) {
        setLetterContent(fetchedCard);
      }
      if (!fetchedCard.opened) {
        setOpened(fetchedCard._id);
      }
    };
    onMount();
  }, [letterId]);

  return (
    <Row className="mx-auto" style={{ height: "100%" }}>
      {letterContent && (
        <div className="mt-5 mx-auto">
          <Invite
            recipient={letterContent.recipient_name}
            message={letterContent.message}
            author={letterContent.author_name}
          />
          <Link to="/">
            <StyledBtn className="mt-4">← Homepage</StyledBtn>
          </Link>
        </div>
      )}
    </Row>
  );
};

export default Letter;
