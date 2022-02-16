import React from "react";
import { StyledDayCard } from "./Styles/DayCard.styled";

const DayWeatherCard: React.FC = () => {
	return (
		<StyledDayCard>
			<p>Tommorrow</p>
			<img src="./images/Snow.png" alt="" className="text-center" />
			<div>
				<span>16&#176;C</span>
				<span>16&#176;C</span>
			</div>
		</StyledDayCard>
	);
};

export default DayWeatherCard;
