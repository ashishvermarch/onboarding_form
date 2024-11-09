import FavoriteSongsList from "./FavoriteSongsList";
import PaymentInformation from "./PaymentInformation";
import PersonalProfile from "./PersonalProfile";
import Success from "./Success";

export const StepsMapping = {
  PersonalProfile,
  FavoriteSongsList,
  PaymentInformation,
  Success,
} as const;

export type StepName = keyof typeof StepsMapping;

type StepsOwnProps = {
  name: StepName;
};

export type StepComponentProps = {
  name: StepName;
  goNext: () => void;
  goBack: () => void;
};

export type StepComponent = (props: StepComponentProps) => JSX.Element;

type StepsProps = StepsOwnProps & StepComponentProps;

const Step = ({ name, ...rest }: StepsProps) => {
  const StepType = StepsMapping[name];
  return <StepType name={name} {...rest} />;
};

export default Step;
