import { StylesConfig } from "react-select";

const selectStyles: StylesConfig = {
  control: (defaultStyles, { menuIsOpen }) => ({
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
  }),

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
    marginTop: "0.25rem",
  }),

  menuList: (defaultStyles) => ({
    ...defaultStyles,
    borderRadius: "0.5rem",
    "::-webkit-scrollbar": {
      width: "0.75rem",
      backgroundColor: "var(--background)",
      borderTopRightRadius: "0.5rem",
      borderBottomRightRadius: "0.5rem",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--foreground-dim)",
      borderRadius: "0.5rem",
    },
  }),

  option: (defaultStyles, { isSelected }) => ({
    ...defaultStyles,
    color: isSelected ? "var(--background)" : "var(--foreground)",
    backgroundColor: isSelected ? "var(--foreground)" : "var(--background)",
    ":hover": {
      ...defaultStyles[":hover"],
      backgroundColor: "var(--foreground-dim)",
    },
  }),
};

export default selectStyles;
