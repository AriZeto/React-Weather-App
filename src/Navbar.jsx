import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMagnifyingGlass,
  faMoon,
  faSun,
  faBars,
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

import styled from "@emotion/styled";

export const WeatherNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  max-height: 50rem;

  @media (min-width: 587px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavbarOptions = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  a {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    flex-grow: 1;
    text-decoration: none;
  }

  @media (min-width: 587px) {
    display: flex;
    flex-direction: row;
    font-size: 1.1rem;
  }
`;

const NavbarUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 0;

  @media (min-width: 587px) {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 604px) and (max-width: 1080px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const FontAwesomeMobileNav = styled.button`
  padding: 1.5rem;
  font-size: 2rem;
  background-color: transparent;
  border: none;

  display: flex;
  justify-content: flex-end;

  margin: 0;
  overflow: hidden;
  @media (min-width: 588px) {
  }
`;

export const FontAwesomeTheme = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 587px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
  @media (min-width: 604px) and (max-width: 1080px) {
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Navbar({ switchThemes, theme, switchOn, isOn }) {
  return (
    <WeatherNavbar>
      <NavbarUl>
        {window.innerWidth >= 588 || isOn ? (
          <>
            <NavbarOptions>
              <NavLink to="/">
                <FontAwesomeIcon icon={faLaptopCode} />
                React Weather App
              </NavLink>
            </NavbarOptions>
            <NavbarOptions>
              <NavLink to="/current-forecast">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Current Weather
              </NavLink>
            </NavbarOptions>
            <NavbarOptions>
              <NavLink to="/five-day-forecast">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Five Day Forecast
              </NavLink>
            </NavbarOptions>
            <NavbarOptions>
              <NavLink to="/sixteen-day-forecast">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Sixteen Day
                Forecast
              </NavLink>
            </NavbarOptions>
            <NavbarOptions>
              <FontAwesomeTheme onClick={switchThemes}>
                {theme["backgroundColor"] === "blanchedalmond" ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} />
                )}
              </FontAwesomeTheme>
              {window.innerWidth <= 588 ? (
                <FontAwesomeMobileNav styles={faAlignCenter}>
                  <FontAwesomeIcon icon={faBars} onClick={switchOn} />
                </FontAwesomeMobileNav>
              ) : null}
            </NavbarOptions>
          </>
        ) : (
          <>
            <FontAwesomeMobileNav>
              <FontAwesomeIcon icon={faBars} onClick={switchOn} />
            </FontAwesomeMobileNav>
          </>
        )}
      </NavbarUl>
    </WeatherNavbar>
  );
}
