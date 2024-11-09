import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StepComponent } from "..";
import { setPersonalProfile } from "../../../../../redux/slice/onboarding";
import { RootState } from "../../../../../redux/store";
import { PersonalProfileType } from "../../../../../types/onboarding";
import FormsWrapper from "../../FormsWrapper";
import styles from "../styles";

const PersonalProfile: StepComponent = (props) => {
  const personalProfileData = useSelector(
    (state: RootState) => state.onboarding.personalProfile
  );

  const [inputValues, setInputValues] = useState<PersonalProfileType>({
    name: "",
    age: null,
    email: "",
    profilePhoto: null,
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      setPersonalProfile({
        ...inputValues,
        profilePhoto: inputValues.profilePhoto,
      })
    );
    props.goNext();
  };

  const handleOnChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;

    const inputname = target.name;
    const isFile = target.name === "profilePhoto";

    setInputValues((prev) => ({
      ...prev,
      [inputname]: isFile
        ? target.files
          ? URL.createObjectURL(target.files[0])
          : null
        : target.value,
    }));
  };

  useEffect(() => {
    setInputValues(personalProfileData);
  }, [personalProfileData]);

  return (
    <FormsWrapper isBackDisabled onFormSubmit={handleSubmit}>
      <Box sx={styles.profileWrapper}>
        <Typography variant="h5" gutterBottom>
          Personal Profile
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={inputValues?.name}
              onChange={handleOnChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="age"
              label="Age"
              type="number"
              variant="outlined"
              fullWidth
              value={inputValues?.age}
              onChange={handleOnChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={inputValues?.email}
              onChange={handleOnChange}
              required
              type="email"
            />
          </Grid>

          <Grid item xs={12} sx={styles.avatarWrapper}>
            <input
              name="profilePhoto"
              accept="image/*"
              id="profile-pic-upload"
              type="file"
              style={{ display: "none" }}
              onChange={handleOnChange}
            />
            <label htmlFor="profile-pic-upload">
              <Button variant="outlined" component="span">
                Upload Profile Picture
              </Button>
            </label>
            {inputValues.profilePhoto && (
              <Avatar src={inputValues?.profilePhoto} sx={styles.avatar} />
            )}
          </Grid>
        </Grid>
      </Box>
    </FormsWrapper>
  );
};

export default PersonalProfile;
