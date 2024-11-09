/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StepsDataTypes } from "../../types/onboarding";

const initialData = {
  personalProfile: {
    name: "",
    age: null,
    email: "",
    profilePhoto: null,
  },
  favoriteSongsList: [],
  paymentInformation: {
    cardNo: "",
    date: "",
    cvv: "",
  },
  success: {
    onboardingSuccess: false,
    loadingCompleted: false,
  },
  stepsCompleted: 0,
};

const initialState: StepsDataTypes = initialData;
export const onboardingSlice = createSlice({
  name: "onboardingSteps",
  initialState,
  reducers: {
    setPersonalProfile: (state, action: PayloadAction<any>) => {
      state.personalProfile = action.payload;
    },
    setFavoriteSongsList: (state, action: PayloadAction<any>) => {
      state.favoriteSongsList = action.payload;
    },
    setPaymentInformation: (state, action: PayloadAction<any>) => {
      state.paymentInformation = action.payload;
    },
    setSuccessOnboarding: (state, action: PayloadAction<any>) => {
      state.success.onboardingSuccess = action.payload;
    },
    setSuccessloading: (state, action: PayloadAction<any>) => {
      state.success.loadingCompleted = action.payload;
    },
    setStepsCompleted: (state, action: PayloadAction<number>) => {
      state.stepsCompleted = action.payload;
    },
    resetOnboardingData: () => initialData,
  },
});

export const {
  setPersonalProfile,
  setFavoriteSongsList,
  setPaymentInformation,
  setSuccessOnboarding,
  setStepsCompleted,
  setSuccessloading,
  resetOnboardingData,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
