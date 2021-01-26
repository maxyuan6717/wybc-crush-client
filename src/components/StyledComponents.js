import AsyncSelect from "react-select/async";
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

export const StyledSelect = styled(AsyncSelect)`
  .css-yk16xz-control,
  .css-1pahdxg-control {
    cursor: text;
    background-color: black;
    box-shadow: none;
    border: none;
    border-bottom: 3px solid white;

    .css-g1d714-ValueContainer {
      padding: 8px;
      .css-1wa3eu0-placeholder,
      .css-b8ldur-Input,
      .css-1uccc91-singleValue {
        color: white;
      }
    }

    .css-1okebmr-indicatorSeparator {
      background-color: white;
      display: none;
    }

    .css-tlfecz-indicatorContainer,
    .css-1gtu0rj-indicatorContainer,
    .css-1xh8qep-loadingIndicator {
      color: white;
      cursor: pointer !important;
    }
  }

  .css-1pahdxg-control:focus,
  .css-1pahdxg-control:active,
  .css-1pahdxg-control:hover,
  .css-yk16xz-control:hover {
    border-bottom: 3px solid white;
    box-shadow: none !important;
  }

  .css-26l3qy-menu {
    background-color: #242424;
    .css-gg45go-NoOptionsMessage,
    .css-4ljt47-MenuList {
      color: white;
    }
  }
`;
