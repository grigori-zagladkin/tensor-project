import axios from "axios";
import { ICreateVote } from "../types/vote.interface";
import { ITheme } from "../types/theme.interface";

export const VoteService = {
  async sendResult(img: string, themeId: number) {
    return await axios.post<ITheme>(
      import.meta.env.VITE_API_URL + `/processing`,
      img
    );
  },
  async getAllVote() {
    return await axios.get(import.meta.env.VITE_API_URL + "/get_voting");
  },
  async getVoteById(id: number) {
    return await axios.get(import.meta.env.VITE_API_URL + `/get_voting/${id}`);
  },
  async createVote(data: ICreateVote) {
    return await axios.post(import.meta.env.VITE_API_URL + `/create_voting`);
  },
};
