import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stepsSequence } from "../../../constants";
import { setStepsCompleted } from "../../../redux/slice/onboarding";
import { RootState } from "../../../redux/store";
import { StepsName } from "../../../types/onboarding";
import Step from "./Step";

const Onboarding = () => {
  const stepsConfig = stepsSequence;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const storedStep = useSelector(
    (state: RootState) => state.onboarding.stepsCompleted
  );

  const { onboardingSuccess, loadingCompleted } = useSelector(
    (state: RootState) => state.onboarding.success
  );

  const [currentStep, setCurrentStep] = useState<StepsName>(
    stepsConfig[storedStep].componentName
  );

  const goNext = () => {
    setCurrentStep(
      () =>
        stepsConfig[
          stepsConfig.findIndex((item) => item.componentName === currentStep) +
            1
        ]?.componentName
    );
    dispatch(
      setStepsCompleted(
        stepsConfig.findIndex((item) => item.componentName === currentStep) + 1
      )
    );
  };

  const goBack = () => {
    setCurrentStep(
      () =>
        stepsConfig[
          stepsConfig.findIndex((item) => item.componentName === currentStep) -
            1
        ]?.componentName
    );
  };

  useEffect(() => {
    if (onboardingSuccess && loadingCompleted) navigate("/home");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onboardingSuccess]);

  return (
    <>
      <Step name={currentStep} goNext={goNext} goBack={goBack} />
    </>
  );
};

export default Onboarding;
