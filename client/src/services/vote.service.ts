import axios from "axios";

export const VoteService = {
  async sendResult(img: string, themeId: number) {
    return await axios.post(
      import.meta.env.VITE_API_URL + `/theme-result/${themeId}`,
      img
    );
  },
};
