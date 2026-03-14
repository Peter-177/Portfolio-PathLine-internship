import { createSlice } from "@reduxjs/toolkit";

const themes = {
  light: "light",
  dark: "dark",
};

const getTheme = () => {
  const theme = localStorage.getItem("theme") || themes.dark;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const State = {
  theme: getTheme(),
};

const userSlice = createSlice({
  name: "user",
  initialState: State,
  reducers: {
    toggleTheme: (state) => {
      const { light, dark } = themes;
      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
