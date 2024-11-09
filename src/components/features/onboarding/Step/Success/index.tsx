import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StepComponent } from "..";
import {
  setSuccessOnboarding,
  setSuccessloading,
} from "../../../../../redux/slice/onboarding";
import FormsWrapper from "../../FormsWrapper";

const Success: StepComponent = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      if (count === 0) {
        dispatch(setSuccessloading(true));
        navigate("/home");
      } else {
        setCount((c) => c - 1);
      }
    }, 800);
  }, [count, dispatch, navigate]);

  useEffect(() => {
    dispatch(setSuccessOnboarding(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormsWrapper
      goNext={props.goNext}
      goBack={props.goBack}
      isBackHidden
      isNextHidden
    >
      Success
      <Box>Redirecting to Home Page In... {count}</Box>
    </FormsWrapper>
  );
};

export default Success;
