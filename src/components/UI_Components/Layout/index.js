import { Styles } from "./styles";

import Header from "../../UI_Components/Header";
import Drawer from "../../UI_Components/Drawer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Drawer />

      <Styles className="App">
        <section className="layout">{children}</section>
      </Styles>
    </>
  );
};

export default Layout;
