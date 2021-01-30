import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { fetchCard, setOpened } from "../util/api";
import styles from "./Letter.module.css";

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

  console.log(letterContent);

  return (
    <Row className="mx-auto" style={{ height: "100%" }}>
      {letterContent && (
        <div className="mt-5 mx-auto">
          <div className={styles.letter}>
            <Row className="mx-auto">
              Dear{" "}
              {letterContent.recipient_name &&
                letterContent.recipient_name.split(" ")[0]}
              ,
            </Row>
            <Row className="mx-auto mt-4">
              &emsp;DEFAULT MESSAGE. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Row>
            {letterContent.message.length > 0 && (
              <Row className="mx-auto mt-4">&emsp;{letterContent.message}</Row>
            )}
            <Row className="mx-auto mt-4 justify-content-end">
              &emsp;Sincerely,
            </Row>
            <Row className="mx-auto justify-content-end">
              {letterContent.author_name.length === 0
                ? "Anonymous ;)"
                : letterContent.author_name}
            </Row>
          </div>
        </div>
      )}
    </Row>
  );
};

export default Letter;
