import { FC } from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";

const MainPage: FC = () => {
  return (
    <Layout>
      <Main
        theme={{
          id: 1,
          title: "Заголовок",
          description:
            "ewfweff ewfewfewf ewfgwegfewgewg ewgew ewgewgewgew ewgewgegergerg regregergerge eergergregergreg",
          createdAt: "2012-02-13",
        }}
      />
    </Layout>
  );
};

export default MainPage;
