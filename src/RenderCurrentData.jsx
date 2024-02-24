import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { GlobalCards } from "./main";
import styled from "@emotion/styled";

const WeatherCardDateSpan = styled.span`
  display: block;
  @media (min-width: 587px) {
    display: inline;
  }
`;

export const StyleLeaflet = styled(MapContainer)`
  width: 90%;
  height: 50vh;
  margin-bottom: 2rem;

  @media (min-width: 587px) {
    width: 75%;
    margin-bottom: none;
  }

  @media (min-width: 604px) and (max-width: 1080px) {
    width: 75%;
    margin-bottom: none;
  }
`;

export default function RenderCurrentData(props) {
  const { data, objName, index } = props;

  // Citation: Conversion of UNIX time for Date, Sunrise & Sunset conditions provided by
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

  return (
    data &&
    data[objName] && (
      <>
        {objName === "currentForecastResData" ? (
          <>
            <div css={GlobalCards}>
              <h1>Current Weather </h1>
              <ul>
                <li>
                  <span>Date: </span>{" "}
                  <p>
                    {data &&
                      new Date(data[objName]["dt"] * 1000).toDateString()}
                  </p>
                </li>
                <li>
                  <img
                    src={`https://openweathermap.org/img/wn/${data[objName]["weather"][0]["icon"]}@2x.png`}
                  />
                </li>
                <li>
                  <span>Description:</span>{" "}
                  <p>{data[objName]["weather"][0]["description"]}</p>
                </li>

                <li>
                  <span>Low:</span>{" "}
                  <p>{data[objName]["main"]["temp_min"]}&deg; F</p>
                </li>
                <li>
                  {" "}
                  <span>High:</span>{" "}
                  <p>{data[objName]["main"]["temp_max"]}&deg; F</p>
                </li>
                <li>
                  <span>Cloudiness:</span>{" "}
                  <p>{data && data[objName]["clouds"]["all"]}%</p>
                </li>
                <li>
                  <span>Humidity: </span>
                  <p>{data[objName]["main"]["humidity"]}%</p>
                </li>
                <li>
                  <span>Wind Speed: </span>
                  <p>{data[objName]["wind"]["speed"]} miles/hour</p>
                </li>
              </ul>
            </div>

            {/* Leaflet code instruction provided by React Leaflet
            https://react-leaflet.js.org/docs/start-setup/ */}
            <StyleLeaflet
              center={[
                data && data["currentForecastResData"]["coord"]["lat"],
                data && data["currentForecastResData"]["coord"]["lon"],
              ]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=4b8cb502ff643f2220e6aa89f84f8324"
              /> */}
              <Marker
                position={[
                  data && data["currentForecastResData"]["coord"]["lat"],
                  data && data["currentForecastResData"]["coord"]["lon"],
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </StyleLeaflet>
          </>
        ) : null}

        {objName === "FiveDayThreeHourData" ? (
          <ul>
            <li>
              <WeatherCardDateSpan>Date: </WeatherCardDateSpan>
              <p>
                {data &&
                  new Date(
                    data[objName]["list"][index]["dt_txt"]
                  ).toDateString()}
              </p>
            </li>

            <li>
              <WeatherCardDateSpan>Time Interval: </WeatherCardDateSpan>
              <p>
                {data &&
                  new Date(
                    data[objName]["list"][index]["dt_txt"]
                  ).toLocaleTimeString()}
              </p>
            </li>
            <li>
              <img
                src={`https://openweathermap.org/img/wn/${data[objName]["list"][index]["weather"][0]["icon"]}@2x.png`}
              />
            </li>
            <li>
              {" "}
              <span>Description: </span>
              <p>
                {data &&
                  data[objName]["list"][index]["weather"][0]["description"]}
              </p>
            </li>
            <li>
              <span>Low: </span>
              <p>
                {data && data[objName]["list"][index]["main"]["temp_min"]}&deg;
                F
              </p>
            </li>
            <li>
              <span>High: </span>
              <p>
                {data && data[objName]["list"][index]["main"]["temp_max"]}&deg;
                F
              </p>
            </li>
            <li>
              {" "}
              <span>Chance of Precipitation: </span>
              <p>
                {Math.round(data && data[objName]["list"][index]["pop"] * 100)}%
              </p>
            </li>
            <li>
              <span>Wind Speed:</span>{" "}
              <p>
                {data && data[objName]["list"][index]["wind"]["speed"]}{" "}
                miles/hour
              </p>
            </li>
            <li>
              <span>Humidity: </span>
              <p>{data && data[objName]["list"][index]["main"]["humidity"]}%</p>
            </li>
            <li>
              <span>Cloudiness: </span>
              <p>{data && data[objName]["list"][index]["clouds"]["all"]}%</p>
            </li>
          </ul>
        ) : null}

        {objName === "SixteenDayForecastData" ? (
          <ul>
            <li>
              <span>Date:</span>{" "}
              <p>
                {new Date(
                  data[objName]["list"][index]["dt"] * 1000
                ).toDateString()}
              </p>
            </li>
            <li>
              <img
                src={`https://openweathermap.org/img/wn/${data[objName]["list"][index]["weather"][0]["icon"]}@2x.png`}
              />
            </li>
            <li>
              <span>Description:</span>{" "}
              <p>
                {data &&
                  data[objName]["list"][index]["weather"][0]["description"]}
              </p>
            </li>

            <li>
              <span>Low:</span>{" "}
              <p>
                {data && data[objName]["list"][index]["temp"]["min"]}&deg; F
              </p>
            </li>
            <li>
              <span>High:</span>{" "}
              <p>
                {data && data[objName]["list"][index]["temp"]["max"]}&deg; F
              </p>
            </li>
            <li>
              <span>Chance of Precipitation:</span>{" "}
              <p>
                {Math.round(data && data[objName]["list"][index]["pop"] * 100)}%
              </p>
            </li>
            <li>
              <span>Wind Speed:</span>{" "}
              <p>{data && data[objName]["list"][index]["speed"]} miles/hour</p>
            </li>
            <li>
              <span>Humidity:</span>{" "}
              <p>{data && data[objName]["list"][index]["humidity"]}%</p>
            </li>
            <li>
              <span>Cloudiness: </span>{" "}
              <p>{data && data[objName]["list"][index]["clouds"]}%</p>
            </li>
            <li>
              <span>Sunrise: </span>{" "}
              <p>
                {data &&
                  new Date(
                    data[objName]["list"][index]["sunrise"] * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </p>
            </li>
            <li>
              <span>Sunset: </span>{" "}
              <p>
                {data &&
                  new Date(
                    data[objName]["list"][index]["sunset"] * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </p>
            </li>
          </ul>
        ) : null}
      </>
    )
  );
}
