import { StylesConfig } from "react-select";

const selectStyles: StylesConfig = {
  control: (defaultStyles, { menuIsOpen }) => {
    return {
      ...defaultStyles,
      height: "4rem",
      boxShadow: "none",
      borderColor: menuIsOpen ? "var(--foreground)" : "var(--background)",
      borderRadius: "0.5rem",
      backgroundColor: "inherit",
      color: "inherit",
      caretColor: "transparent",

      ":hover": {
        ...defaultStyles[":hover"],
        borderColor: menuIsOpen ? "var(--foreground)" : "var(--foreground-dim)",
      },
    };
  },
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: "var(--foreground)",
  }),
  option: (defaultStyles, { isSelected }) => {
    return {
      ...defaultStyles,
      color: isSelected ? "var(--background)" : "var(--foreground)",
      backgroundColor: isSelected ? "var(--foreground)" : "var(--background)",
    };
  },
};

export default selectStyles;
