import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerSuccess,
} from "./authSlice";

const getStoredUsers = () => {
  const users = localStorage.getItem("usuarios");
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
  localStorage.setItem("usuarios", JSON.stringify(users));
};

const saveSession = (user) => {
  localStorage.setItem("usuarioActual", JSON.stringify(user));
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    dispatch(loginStart());
    try {
      const users = getStoredUsers();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        return rejectWithValue("Credenciales inválidas");
      }

      saveSession(user);
      dispatch(loginSuccess(user));
      return user;
    } catch (error) {
      return rejectWithValue("Error al iniciar sesión");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { dispatch, rejectWithValue }) => {
    const users = getStoredUsers();
    const existing = users.find((u) => u.email === email);

    if (existing) {
      return rejectWithValue("Este correo ya está registrado");
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: "user",
      avatar: "https://i.pravatar.cc/150?u=" + email,
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
    saveSession(newUser);

    dispatch(registerSuccess(newUser));
    return newUser;
  }
);
