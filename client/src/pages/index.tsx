import { FC } from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { ThemeService } from "../services/theme.service";

let data = await ThemeService.getAllThemes();

console.log(data);

const MainPage: FC = () => {
  return <Layout />;
};

export default MainPage;
