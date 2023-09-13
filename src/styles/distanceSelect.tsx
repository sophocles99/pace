import { StylesConfig } from "react-select";

const selectStyles: StylesConfig = {
  control: (defaultStyles) => ({
    ...defaultStyles,
    height: "4rem",
    border: "none",
    borderRadius: "0.5rem",
    backgroundColor: "inherit",
    color: "inherit",
    caretColor: "transparent",
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: "var(--background)",
  }),
  option: (defaultStyles, { data, isSelected }) => {
    if (isSelected) {
      console.log(data, defaultStyles);
    }
    return {
      ...defaultStyles,
      backgroundColor: isSelected ? "var(--background)" : "var(--foreground)",
    };
  },
};

export default selectStyles;

