import { Box, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StepComponent } from "..";
import { setPaymentInformation } from "../../../../../redux/slice/onboarding";
import { RootState } from "../../../../../redux/store";
import { PaymentType } from "../../../../../types/onboarding";
import FormsWrapper from "../../FormsWrapper";
import styles from "../styles";

const PaymentInformation: StepComponent = (props) => {
  const paymentData = useSelector(
    (state: RootState) => state.onboarding.paymentInformation
  );

  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState<PaymentType>({
    cardNo: "",
    date: "",
    cvv: "",
  });

  const handleSubmit = () => {
    dispatch(setPaymentInformation(inputValues));
    props.goNext();
  };

  const handleOnChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;

    setInputValues((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    setInputValues(paymentData);
  }, [paymentData]);

  return (
    <FormsWrapper
      goNext={handleSubmit}
      goBack={props.goBack}
      isNextDisable={
        !inputValues.cardNo || !inputValues.date || !inputValues.cvv
      }
    >
      <Box sx={styles.paymentWrapper}>
        <Typography variant="h6" gutterBottom align="center">
          Credit Card Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="cardNo"
              label="Card Number"
              variant="outlined"
              fullWidth
              value={inputValues.cardNo}
              onChange={handleOnChange}
              required
              type="text"
              inputProps={{
                maxLength: 19,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="date"
              label="MM/YY"
              variant="outlined"
              fullWidth
              value={inputValues.date}
              onChange={handleOnChange}
              required
              type="text"
              inputProps={{
                maxLength: 5,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="cvv"
              label="CVV"
              variant="outlined"
              fullWidth
              value={inputValues.cvv}
              onChange={handleOnChange}
              required
              type="password"
              inputProps={{
                maxLength: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </FormsWrapper>
  );
};

export default PaymentInformation;
