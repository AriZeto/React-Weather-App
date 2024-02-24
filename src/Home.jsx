import styled from "@emotion/styled";

export const WeatherHomepage = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  p {
    font-size: 1.2rem;
  }

  span {
    font-size: 1.9rem;
    /* color: rgb(34, 54, 40); */
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: block;
  }

  @media (min-width: 587px) {
    max-width: 50%;
    padding-left: 2.5rem;
  }

  @media (min-width: 604px) and (max-width: 1080px) {
    max-width: none;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export default function Home() {
  return (
    <WeatherHomepage>
      <h1>Home</h1>
      <p>
        Welcome! This is a multi-page application that utilizes React-Router,
        TanStack Query (asynchronous data fetching and caching), and the Emotion
        Library. The content that is rendered within this web app is data that
        is pulled from the OpenWeather API
      </p>
      <p>
        Within the Navbar, there are links to this Homepage, Current Weather, a
        Five Day Forecast (containing three hour intervals), and a Sixteen day
        forecast.
      </p>
      <p>
        When fetching the weather data, a user may enter a city. For more
        accurate results, users should enter 'city, state, country code'. An
        example of this could be:
        <span>Beaverton, OR, US</span>
        The results will be rendered as cards. The data that is rendered for
        each card is dependent on the JSON response from the API endpoint that
        is called.
      </p>
      <span>Extra Credit: Complete!</span>
      <p>
        This web app contains two themes, a light mode, and a dark mode (whereas
        the dark mode is the default theme). The themes are toggled by a switch
        in the navbar.
      </p>

      <p>
        Additionally, this web app also renders a map (powered by Leaflet) on
        the 'Current Weather' page. The theme the user selects will also be
        applied to the map.
      </p>
    </WeatherHomepage>
  );
}
