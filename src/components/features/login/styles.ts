import { SxProps } from "@mui/material";

const styles: { [key: string]: SxProps } = {
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  },

  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "100%",
    maxWidth: 400,
  },
};

export default styles;
