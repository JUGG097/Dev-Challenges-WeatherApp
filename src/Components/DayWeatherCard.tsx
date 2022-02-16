import React from "react";
import { StyledDayCard } from "./Styles/DayCard.styled";
import { WeatherAPIData } from "../Utils/Types";
import { formatDate, WeatherImageMap } from "../Utils/Helper";

const DayWeatherCard: React.FC<{ data: WeatherAPIData; tomorrow: boolean }> = ({
	data,
	tomorrow,
}) => {
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
				<span>{Math.round(data.max_temp)}&#176;C</span>
				<span>{Math.round(data.min_temp)}&#176;C</span>
			</div>
		</StyledDayCard>
	);
};

export default DayWeatherCard;
