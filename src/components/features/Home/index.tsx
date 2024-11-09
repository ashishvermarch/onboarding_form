import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { onboardingSuccess, loadingCompleted } = useSelector(
    (state: RootState) => state.onboarding.success
  );

  useEffect(() => {
    if (!onboardingSuccess || !loadingCompleted) navigate("/onboarding");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onboardingSuccess]);

  return <Box>Welcome to Home</Box>;
};

export default Home;
