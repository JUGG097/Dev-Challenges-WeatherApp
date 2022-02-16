import React from "react";
import { StyledHumidityCard } from "./Styles/HumidityCard.styled";

const HumidityCard: React.FC = () => {
	return (
		// Pass Humidity value as a prop to styled component
		<StyledHumidityCard>
			<p>Humidty</p>
			<p className="humidity-value">
				84<span>%</span>
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
