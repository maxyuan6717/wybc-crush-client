import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { fetchCard, setOpened } from "../util/api";

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

  return <div>Letter {letterId}</div>;
};

export default Letter;
