import { combineReducers } from "redux";
import loggedIn from "./slice/login";
import onboarding from "./slice/onboarding";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const loggedInConfig = {
  key: "isLoggdIn",
  storage: storage,
};

const onboardingConfig = {
  key: "onboarding",
  storage: storage,
};

const rootReducer = combineReducers({
  loggedIn: persistReducer(loggedInConfig, loggedIn),
  onboarding: persistReducer(onboardingConfig, onboarding),
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
