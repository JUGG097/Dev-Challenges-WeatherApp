import React from "react";
import { StyledDayCard } from "./Styles/DayCard.styled";
import { WeatherAPIData } from "../Utils/Types";
import { formatDate, WeatherImageMap } from "../Utils/Helper";

const DayWeatherCard: React.FC<{
	data: WeatherAPIData;
	tomorrow: boolean;
	tempValue: (tempValue: number) => JSX.Element | undefined;
}> = ({ data, tomorrow, tempValue }) => {
	return (
		<StyledDayCard>
			{tomorrow ? (
				<p>Tommorrow</p>
			) : (
				<p>{formatDate(data.applicable_date)}</p>
			)}

			<img
				src={`./images/${WeatherImageMap[data.weather_state_abbr]}`}
				alt=""
				className="text-center"
			/>
			<div>
				<span>{tempValue(data.max_temp)}</span>
				<span className="min-temp-value">
					{tempValue(data.min_temp)}
				</span>
			</div>
		</StyledDayCard>
	);
};

export default DayWeatherCard;
