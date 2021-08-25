import { styled } from "../../styles/stitches.config";

export const MainStyles = {
  Main: styled("section", {
    display: "flex",
    alignItems: "flex-start",
    height: "100%",
    gap: 100,
    margin: "50px 100px 100px",
  }),
  MainBody: styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  }),
  MainMeta: styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  }),
  MainMetaTitle: styled("h1", {
    fontSize: 48,
    fontWeight: 600,
    color: "$text_primary",
  }),
  MainMetaDesc: styled("p", {
    fontSize: 24,
    fontWeight: 500,
    color: "$text_secondary",
  }),
  MainSocial: styled("div", {
    display: "flex",
    alignItems: "center",
    gap: 10,
  }),
  MainSocialItem: styled("a", {
    display: "inline-flex",
    backgroundColor: "transparent",
    borderRadius: "50%",
    transition: "background-color 0.2s",
    padding: 10,

    "&:hover": {
      backgroundColor: "$main_social_item_background_hover",
    },

    "& img": {
      width: 24,
      height: 24,
    },
  }),
};
