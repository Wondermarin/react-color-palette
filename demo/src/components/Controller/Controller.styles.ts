import { styled } from "../../styles/stitches.config";

export const ControllerStyles = {
  Controller: styled("section", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    backgroundColor: "$controller_background",
    borderRadius: 20,
    padding: 20,
    margin: "100px 100px 50px",
  }),
  ControllerMeta: styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  }),
  ControllerMetaTitle: styled("h2", {
    fontSize: 24,
    fontWeight: 600,
    color: "$text_primary",
  }),
  ControllerMetaDesc: styled("p", {
    fontSize: 18,
    fontWeight: 500,
    color: "$text_secondary",
  }),
  ControllerBody: styled("div", {
    display: "flex",
    alignItems: "center",
    gap: 10,
  }),
  ControllerButton: styled("button", {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "$montserrat",
    fontSize: 18,
    fontWeight: 500,
    color: "$text_secondary",
    backgroundColor: "$controller_button_background",
    border: "none",
    outline: "none",
    borderRadius: 16,
    transition: "color 0.2s, background-color 0.2s",
    padding: "8px 16px",

    variants: {
      active: {
        true: {
          color: "$text_primary",
          backgroundColor: "$controller_button_background_active",
        },
      },
    },
  }),
};
