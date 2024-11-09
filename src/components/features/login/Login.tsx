import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { credentials } from "../../../constants";
import { isLogin } from "../../../redux/slice/login";
import { RootState } from "../../../redux/store";
import { LoginData } from "../../../types/login";
import styles from "./styles";

const LoginForm: React.FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.loggedIn.isLoggedIn
  );

  const [inputValues, setInputValues] = useState<LoginData>({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValues((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (JSON.stringify(credentials) === JSON.stringify(inputValues)) {
      dispatch(isLogin(true));
      navigate("/onboarding");
    } else {
      alert("please insert correct credentials");
    }
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/onboarding");
  }, [isLoggedIn, navigate]);

  return (
    <Box sx={styles.loginWrapper}>
      <Box component="marquee">
        username - user123 || password - password123
      </Box>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={styles.formWrapper}>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          value={inputValues.username}
          onChange={handleOnChange}
          fullWidth
        />

        <TextField
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          value={inputValues.password}
          onChange={handleOnChange}
          fullWidth
        />

        <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
