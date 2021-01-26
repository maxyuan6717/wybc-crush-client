import styled from "styled-components";

export const StyledBtn = styled.div`
  border: 3px solid white;
  padding: 12px;
  font-size: 20px;
  color: white;
  font-weight: 500;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    text-decoration: none !important;
  }
`;
