import axios from "axios";
import { Base } from "./base";

// Create card
const createCard = async (
  author_name,
  author_netId,
  recipient_name,
  recipient_email,
  message
) => {
  axios.post(`${Base}/card/new`, {
    author_name: author_name === "" ? "Anonymous ;)" : author_name,
    author_netId,
    recipient_name,
    recipient_email,
    message,
  });
};

//  Fetch single card
const fetchCard = async (id) => {
  let fetchedCard = await axios.get(`${Base}/card/single/${id}`);

  if (fetchedCard) {
    return fetchedCard.data.data;
  }
  return null;
};

// Fetch all students
const fetchStudents = async () => {
  let fetchedStudentList = await axios.get(`${Base}/card/allstudents`);

  if (fetchedStudentList) {
    return fetchedStudentList.data.data;
  }
};

// Set letter to "sent" status
const setOpened = async (id) => {
  await axios.post(`${Base}/card/opened`, { _id: id });
};

// Get number of letters
const fetchCount = async () => {
  let fetchedCount = await axios.get(`${Base}/card/count`);

  if (fetchedCount) {
    return fetchedCount;
  }
};

const casCheck = async () => {
  let auth = await axios.get(`${Base}/auth/check`);

  if (auth) {
    return auth;
  }
};

const fetchUserCards = async (id) => {
  let fetchedCards = await axios.get(`${Base}/card/user/${id}`);
  if (fetchedCards) {
    return fetchedCards.data.cards;
  }
  return "invalid user :(";
};

export {
  createCard,
  fetchCard,
  fetchStudents,
  setOpened,
  fetchCount,
  casCheck,
  fetchUserCards,
};
