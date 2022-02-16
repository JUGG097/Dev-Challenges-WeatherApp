import React from "react";
import { StyledHumidityCard } from "./Styles/HumidityCard.styled";

const HumidityCard: React.FC<{ humidityValue: number }> = ({
	humidityValue,
}) => {
	return (
		// Pass Humidity value as a prop to styled component
		<StyledHumidityCard value={`${humidityValue}%`}>
			<p>Humidty</p>
			<p className="humidity-value">
				{humidityValue}
				<span>%</span>
			</p>

			<div>
				<p className="progress-label">
					<span>0</span> <span>50</span> <span>100</span>
				</p>
				<div className="progress-container">
					<div className="progress-filler"></div>
				</div>
				<p className="progress-label-percent">%</p>
			</div>
		</StyledHumidityCard>
	);
};

export default HumidityCard;
