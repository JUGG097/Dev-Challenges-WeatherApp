import React from "react";
import { StyledAirPressure } from "./Styles/AirPressureCard.styled";

const AirPressureCard: React.FC<{ pressureValue: number }> = ({
	pressureValue,
}) => {
	return (
		<StyledAirPressure>
			<p>Air Pressure</p>
			<p className="pressure-value">
				{pressureValue}
				<span> mb</span>
			</p>
		</StyledAirPressure>
	);
};

export default AirPressureCard;
