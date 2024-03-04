import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const WeatherFooter = styled.nav`
  margin-top: auto;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
`;

export const FooterOptions = styled.li`
  display: inline-block;

  font-size: 1.2rem;

  a {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <WeatherFooter>
      <ul>
        <FooterOptions>
          <Link to="https://github.com/osu-cs494-w24/assignment-3-AriZeto">
            &copy; 2024 Ariel Zeto.
          </Link>
        </FooterOptions>
      </ul>
    </WeatherFooter>
  );
}
