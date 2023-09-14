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
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    padding: "0 8px 0 0",
  }),
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    display: "none",
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    borderRadius: "0.5rem",
    marginTop: "0.25rem"
  }),
  menuList: (defaultStyles) => ({
    ...defaultStyles,
    borderRadius: "0.5rem",
    "::-webkit-scrollbar": {
      width: "1rem",
      backgroundColor: "var(--background)",
      borderTopRightRadius: "0.5rem",
      borderBottomRightRadius: "0.5rem",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      border: "1px solid var(--foreground)",
      borderRadius: "0.5rem",
      opacity: "0.2",
    },
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
