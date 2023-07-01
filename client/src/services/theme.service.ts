import axios from "axios";
import { ICreateTheme } from "../types/theme.interface";

export const ThemeService = {
  async createTheme(data: ICreateTheme) {
    return await axios.post(
      import.meta.env.VITE_API_URL + "/create_themes",
      data
    );
  },
  async getAllThemes() {
    return await axios.get(import.meta.env.VITE_API_URL + "/get_themes");
  },
  async getThemeById(id: number) {
    return axios.get(import.meta.env.VITE_API_URL + `/get_themes/${id}`);
  },
};
