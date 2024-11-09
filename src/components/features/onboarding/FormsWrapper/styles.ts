import { SxProps } from "@mui/material";

const styles: { [key: string]: SxProps } = {
  formWrapper: {
    textAlign: "center",
  },

  buttonsWrapper: {
    height: {
      tablet: "60px",
      mobile: "60px",
    },
    width: {
      tablet: "92%",
      mobile: "100%",
    },
    m: "auto",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    alignItems: "center",
    boxShadow: "0px -2px 11px 0px var(--primary)",
    position: {
      tablet: "relative",
      mobile: "fixed",
    },

    bottom: {
      tablet: "",
      mobile: "0",
    },

    zIndex: "100",
  },
};

export default styles;
