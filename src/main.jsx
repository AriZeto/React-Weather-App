import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider, Global, css } from "@emotion/react";
import { Container } from "./Routes";
import { NavbarOptions, WeatherNavbar } from "./Navbar";
import { WeatherFooter, FooterOptions } from "./Footer";
import { WeatherHomepage } from "./Home";
import { StyleLeaflet } from "./RenderCurrentData";
import { FontAwesomeTheme } from "./Navbar";
import { FontAwesomeMobileNav } from "./Navbar";

import { useState } from "react";

import QuerySearch from "./QuerySearch";
import Root from "./Routes";
import Home from "./Home";

export const useLightMode = {
  defaultFontColor: "rgb(34, 54, 40);",
  backgroundColor: "blanchedalmond",
  navbarBackground: "rgb(190, 194, 185);",
  navbarBackgroundActive: "rgb(44, 44, 44)",
  footerBackground: "rgb(190, 194, 185);",
  navbarOptionsColor: "rgb(34, 54, 40);",
  navbarOptionsColorActive: "rgb(129, 212, 149);",
  navbarActiveBorderBottom: "4px solid rgb(129, 212, 149);",
  footerOptionsColor: "rgb(34, 54, 40);",
  footerOptionsColorActive: "rgb(34, 54, 40);",
  homepageSpan: "rgb(34, 54, 40);",
  fontAwesomeIconColor: "black",
  glowEffect: "filter: drop-shadow(2px 5px 4px #000000)",
};

export const useDarkMode = {
  defaultFontColor: "white",
  backgroundColor: "rgb(33, 31, 38)",
  navbarBackground: "rgb(44, 44, 44)",
  navbarBackgroundActive: "#57b876",
  footerBackground: "rgb(44, 44, 44)",
  navbarOptionsColor: "white",
  navbarOptionsColorActive: "rgb(255, 255, 255);",
  navbarActiveBorderBottom: "4px solid rgb(123, 201, 140);",
  FontAwesomeMobileNav: "white",
  footerOptionsColor: "white",
  footerOptionsColorActive: "rgb(34, 54, 40);",
  homepageSpan: "rgb(129, 212, 149);",
  StyleLeaflet:
    // Leaflet dark mode css provided by:
    // https://dev.to/deepakdevanand/leaflet-map-dark-theme-5ej0
    "invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);",
  fontAwesomeIconColor: "white",
  glowEffect: "filter: drop-shadow(2px 5px 4px #ffffff)",
};

export default function Main() {
  const [theme, setTheme] = useState(useDarkMode);
  const [isOn, setIsOn] = useState(false);

  const switchThemes = () => {
    setTheme(theme === useLightMode ? useDarkMode : useLightMode);
  };

  const switchOn = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  const presentTheme = theme;

  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root
          switchThemes={switchThemes}
          theme={theme}
          switchOn={switchOn}
          isOn={isOn}
        />
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "current-forecast", element: <QuerySearch /> },
        { path: "five-day-forecast", element: <QuerySearch /> },
        { path: "sixteen-day-forecast", element: <QuerySearch /> },
      ],
    },
  ]);

  const globalStyles = (presentTheme) => css`
    @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    body {
      font-family: "Lato", sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: ${presentTheme.backgroundColor};
      color: ${presentTheme.defaultFontColor};
    }
    input {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 0.5rem;
      border-radius: 10px;
      color: rgb(42, 94, 55);
      font-size: 1rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }

    button {
      background-color: #57b876;
      border: 2px solid rgb(42, 94, 55);
      border-radius: 10px;
      color: rgb(0, 0, 0);
      font-size: 1rem;
      padding: 0.5rem 2rem;
      text-align: center;
      cursor: pointer;
    }

    ${Container} {
      background-color: ${presentTheme.backgroundColor};
    }

    ${WeatherNavbar} {
      background-color: ${presentTheme.navbarBackground};

      a {
        background-color: ${presentTheme.navbarBackground};
      }
      a.active {
        border-bottom: ${presentTheme.navbarActiveBorderBottom};
        background-color: ${presentTheme.navbarBackgroundActive};
      }
    }

    ${NavbarOptions} {
      a {
        color: ${presentTheme.navbarOptionsColor};
      }

      a.active {
        color: ${presentTheme.navbarOptionsColorActive};
      }
    }

    ${WeatherFooter} {
      background-color: ${presentTheme.footerBackground};
    }

    ${FooterOptions} {
      color: ${presentTheme.footerOptionsColor};
    }
    a {
      color: ${presentTheme.footerOptionsColor};
    }

    ${WeatherHomepage} span {
      color: ${presentTheme.homepageSpan};
    }

    ${StyleLeaflet} {
      filter: ${presentTheme.StyleLeaflet};
    }

    ${FontAwesomeTheme} {
      color: ${presentTheme.fontAwesomeIconColor};
      :hover {
        ${presentTheme.glowEffect}
      }
    }
    ${FontAwesomeMobileNav} {
      color: ${presentTheme.FontAwesomeMobileNav};
    }
  `;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles(presentTheme)} />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export const GlobalCards = css`
  padding: 1rem;
  max-width: 30rem;
  border: 2px solid rgb(142, 191, 106);
  border-radius: 3rem;
  /* Citation: box-shadow effect grabbed from MDN docs.
https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
 */
  box-shadow: 12px 12px 2px 1px rgba(54, 195, 103, 0.2);
  margin-bottom: 2rem;
  min-width: 20%;

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }

  li {
    list-style-type: none;
    flex-grow: 1;
  }

  span {
    color: rgb(142, 191, 106);
    font-weight: 700;
    font-size: 2rem;
    display: inline;
  }

  p {
    display: inline;
    font-size: 2rem;
  }

  img {
    display: block;
  }

  @media (min-width: 587px) {
    margin-right: 1.7rem;
    min-width: 20%;
    justify-content: space-around;

    ul {
      flex-grow: 1;
      padding-left: 0;
    }

    span {
      display: inline;
      font-size: 1.3rem;
    }

    p {
      display: inline;
      font-size: 1.3rem;
    }

    li {
      padding-bottom: 0.7rem;
    }
  }
  @media (min-width: 604px) and (max-width: 1080px) {
    min-width: 10%;
    justify-content: space-around;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
