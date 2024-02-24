import { ScrollRestoration, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "@emotion/styled";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ContainPage = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default function Routes({
  children,
  switchThemes,
  theme,
  switchOn,
  isOn,
}) {
  return (
    <>
      <ScrollRestoration />
      <ContainPage>
        <Container>
          <Navbar
            switchThemes={switchThemes}
            theme={theme}
            switchOn={switchOn}
            isOn={isOn}
          />
          <main>{children || <Outlet />}</main>
          <Footer />
        </Container>
      </ContainPage>
    </>
  );
}
