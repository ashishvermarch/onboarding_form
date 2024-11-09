import { StepRecord } from "../types/onboarding";

export const credentials = {
  username: "user123",
  password: "password123",
};

export const steps: StepRecord = {
  personalProfile: {
    label: "Personal Profile",
    componentName: "PersonalProfile",
  },
  favoriteSongsList: {
    label: "Favorite Songs List",
    componentName: "FavoriteSongsList",
  },
  paymentInformation: {
    label: "Payment Information",
    componentName: "PaymentInformation",
  },
  success: {
    label: "Success",
    componentName: "Success",
  },
};

export const stepsSequence: StepRecord[string][] = [
  steps.personalProfile,
  steps.favoriteSongsList,
  steps.paymentInformation,
  steps.success,
];
