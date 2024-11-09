import { Box, Button } from "@mui/material";
import { FormWrapperProps } from "../../../../types/onboarding";
import styles from "./styles";

const FormsWrapper = ({
  goNext,
  goBack,
  children,
  onFormSubmit,
  nextLabel = "Next",
  backLabel = "Back",
  isBackDisabled = false,
  isBackHidden = false,
  isNextHidden = false,
  isNextDisable = false,
}: FormWrapperProps) => {
  return (
    <Box component="form" onSubmit={onFormSubmit} sx={styles.formWrapper}>
      {children}
      <Box sx={styles.buttonsWrapper}>
        {!isBackHidden && (
          <Button
            variant="contained"
            disabled={isBackDisabled}
            onClick={goBack}
          >
            {backLabel}
          </Button>
        )}

        {!isNextHidden && (
          <Button
            variant="contained"
            disabled={isNextDisable}
            onClick={goNext}
            type="submit"
          >
            {nextLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FormsWrapper;
