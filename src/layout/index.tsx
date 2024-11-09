import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../redux/slice/login";
import { resetOnboardingData } from "../redux/slice/onboarding";
import { RootState } from "../redux/store";
import styles from "./styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.loggedIn.isLoggedIn
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(isLogin(false));
    navigate("/login");
  };

  const handleClearData = () => {
    dispatch(resetOnboardingData());
  };

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  return (
    <Box>
      <Box sx={styles.btnWrapper}>
        <Button onClick={handleLogout}>LogOut</Button>
        <Button onClick={handleClearData}>
          Clear Onboarding data from Redux
        </Button>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
