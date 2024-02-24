import { useLocation } from "react-router-dom";
import RenderCurrentData from "./RenderCurrentData";
import { GlobalCards } from "./main";

export default function CardComponent(props) {
  const { totalCards, data, objName } = props;
  const myRouteLocation = useLocation();

  const cardCount16Day = totalCards && totalCards[0];
  const cardCount5Day = totalCards && totalCards[1];

  const objDataFiveDay = objName && objName[0];
  const objDataSixteenDay = objName && objName[1];
  const objDataCurrentDay = objName && objName[2];

  return (
    <>
      {myRouteLocation.pathname == "/current-forecast" ? (
        <RenderCurrentData data={data} objName={objDataCurrentDay} />
      ) : null}

      {myRouteLocation.pathname == "/five-day-forecast" ? (
        <>
          {cardCount5Day &&
            cardCount5Day.map((key, index) => (
              <div css={GlobalCards} key={`${key["dt"]}`}>
                <RenderCurrentData
                  data={data}
                  objName={objDataFiveDay}
                  index={index}
                />
              </div>
            ))}
        </>
      ) : null}

      {myRouteLocation.pathname == "/sixteen-day-forecast" ? (
        //
        <>
          {cardCount16Day &&
            cardCount16Day.map((key, index) => (
              <div css={GlobalCards} key={`${key["dt"]}`}>
                <RenderCurrentData
                  data={data}
                  objName={objDataSixteenDay}
                  index={index}
                />
              </div>
            ))}
        </>
      ) : null}
    </>
  );
}
