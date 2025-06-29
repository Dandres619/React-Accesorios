// src/features/auth/hooks/useAuth.js
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../slices/authThunks"; // ✅ thunks
import { logout } from "../slices/authSlice"; // ✅ slice solo para logout
import {
  selectAuth,
  selectUser,
  selectIsAuthenticated,
  selectIsLoading,
  selectError,
} from "../slices/authSelectors";

export const useAuth = () => {
  const dispatch = useDispatch();

  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const login = async (credentials) => {
    return await dispatch(loginUser(credentials));
  };

  const register = async (newUser) => {
    return await dispatch(registerUser(newUser));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    auth,
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout: logoutUser,
  };
};
