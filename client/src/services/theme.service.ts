import axios from "axios";
import { ICreateTheme } from "../types/theme.interface";

export const ThemeService = {
  async createTheme(data: ICreateTheme) {
    return await axios.post(import.meta.env.VITE_API_URL + "/theme", data);
  },
};
