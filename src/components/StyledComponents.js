import styled from "styled-components";

export const StyledBtn = styled.div`
  border: 1px solid white;
  padding: 6px;
  font-size: 20px;
  color: white;
  font-weight: 500;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    text-decoration: none !important;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 2px 6px;

  &:active,
  &:focus {
    outline: none;
    border-color: white;
  }
`;
