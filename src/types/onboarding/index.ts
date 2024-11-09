import React from "react";
import { StepsMapping } from "../../components/features/onboarding/Step";

export type StepsName = keyof typeof StepsMapping;

export type StepRecord = Record<
  string,
  {
    label: string;
    componentName: StepsName;
  }
>;

export type PersonalProfileType = {
  name: string;
  age: number | null;
  email: string;
  profilePhoto: null | File;
};

export type FavSongType = {
  song: string;
  id: number;
}[];

export type PaymentType = {
  cardNo: string;
  date: string;
  cvv: string;
};

export type StepsDataTypes = {
  personalProfile: PersonalProfileType;
  favoriteSongsList: FavSongType;
  paymentInformation: PaymentType;
  success: {
    onboardingSuccess: boolean;
    loadingCompleted: boolean;
  };
  stepsCompleted: number;
};

export type FormWrapperProps = {
  children: React.ReactNode;
  onFormSubmit?: () => void;
  goNext?: () => void;
  goBack?: () => void;
  nextLabel?: string;
  backLabel?: string;
  isBackDisabled?: boolean;
  isBackHidden?: boolean;
  isNextHidden?: boolean;
  isNextDisable?: boolean;
  nonSubmit?: boolean;
};
