export const select_styles = {
  option: (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    cursor: "pointer",
    color: "white",
    backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? "#e66a6a"
      : isFocused
      ? "#a64c4c"
      : undefined,
    ":active": {
      ...base[":active"],
      backgroundColor: !isDisabled && "#e66a6a",
    },
  }),
  menu: (base) => ({
    ...base,
    paddingTop: 0,
    marginTop: 0,
    borderRadius: "0px",
    backgroundColor: "#242424",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  input: (base) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base) => ({
    ...base,
    color: "white",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "6px",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white",
    cursor: "pointer",
    ":hover": { color: "#bfbfbf" },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "white",
    cursor: "pointer",
    ":hover": { color: "var(--pink)" },
  }),
  control: (base) => ({
    ...base,
    cursor: "text",
    backgroundColor: "black",
    boxShadow: "none",
    border: "none",
    borderBottom: "2px solid white",
    borderRadius: "0px",
    ":hover": {
      border: "none",
      borderBottom: "2px solid white",
    },
  }),
};
