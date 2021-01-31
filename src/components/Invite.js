import React from "react";
import { Row } from "react-bootstrap";
import styles from "./Invite.module.css";

const Invite = ({ recipient, message, author }) => {
  return (
    <div className={styles.invite + " mx-auto"}>
      <Row className="mx-auto">
        Dear {recipient && recipient.split(" ")[0]},
      </Row>
      <Row className="mx-auto mt-4">
        Be mine at WYBCx Crush! We can listen to some knockout tunes and find
        love in the breakout rooms!
      </Row>
      <Row className="mx-auto mt-4">Date: 2/12 at 10:00pm EST</Row>
      <Row className="mx-auto mt-1">
        Artists: Archer Frodyma, Noelle Mercer, Surfliner
      </Row>
      <Row className="mx-auto mt-1">
        FB Event:{" "}
        <a className="ml-1" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Link
        </a>
      </Row>
      {message.length > 0 && <Row className="mx-auto mt-4">{message}</Row>}
      <Row className="mx-auto mt-4 justify-content-end">Sincerely,</Row>
      <Row className="mx-auto justify-content-end">
        {author.length === 0 ? "Anonymous ;)" : author}
      </Row>
    </div>
  );
};

export default Invite;
