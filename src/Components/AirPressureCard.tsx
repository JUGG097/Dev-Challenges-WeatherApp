import React from "react";
import { StyledAirPressure } from "./Styles/AirPressureCard.styled";

const AirPressureCard: React.FC = () => {
	return (
		<StyledAirPressure>
			<p>Air Pressure</p>
			<p className="pressure-value">
				998<span> mb</span>
			</p>
		</StyledAirPressure>
	);
};

export default AirPressureCard;
