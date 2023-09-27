import { useAppContext } from "../../../hooks/useAppContext";
import TileHeader from "./TileHeader";
import { getPressureDescription } from "../../../utils";
import { ForecastType } from "../../../types";

const Pressure = (): JSX.Element => {
  const { forecast } = useAppContext() as {
    forecast: ForecastType | undefined;
  };

  let today;
  if (forecast) [today] = forecast.list;

  const pressure = getPressureDescription(today && today.main.pressure)

  return (
    <article className="tile flex col" id="tile-pressure">
      <TileHeader tileId="pressure" heading="PRESSURE" />
      <p className="tile-large-text">{today!.main.pressure} hPa</p>
      <p>{pressure ? pressure : null}</p>
    </article>
  );
};

export default Pressure;
