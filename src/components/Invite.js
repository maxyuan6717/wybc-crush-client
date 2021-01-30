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
        &emsp;DEFAULT MESSAGE. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Row>
      {message.length > 0 && (
        <Row className="mx-auto mt-4">&emsp;{message}</Row>
      )}
      <Row className="mx-auto mt-4 justify-content-end">&emsp;Sincerely,</Row>
      <Row className="mx-auto justify-content-end">
        {author.length === 0 ? "Anonymous ;)" : author}
      </Row>
    </div>
  );
};

export default Invite;
