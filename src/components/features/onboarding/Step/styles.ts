import { SxProps } from "@mui/material";

const styles: { [key: string]: SxProps } = {
  accordionStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  paymentWrapper: {
    maxWidth: 400,
    margin: "0 auto",
    padding: 3,
  },

  favSongWrapper: { maxWidth: 500, margin: "0 auto", padding: 2 },

  songItem: {
    margin: "0 20px",
    cursor: "pointer",
  },

  mb2: { marginBottom: 2 },

  profileWrapper: { width: "100%", maxWidth: 500, mx: "auto", padding: 3 },

  avatarWrapper: { display: "flex", alignItems: "center" },
  avatar: {
    width: 56,
    height: 56,
    ml: 2,
  },
};

export default styles;
