import React from "react";
import {
	StyledWindStatus,
	StyleDirectionIcon,
} from "./Styles/WindStatus.styled";
import { FaLocationArrow } from "react-icons/fa";

const WindStatus: React.FC<{ windSpeed: number; windDirection: string }> = ({
	windSpeed,
	windDirection,
}) => {
	return (
		<StyledWindStatus>
			<p>Wind Status</p>
			<p className="wind-value">
				{Math.round(windSpeed)}
				<span>mph</span>
			</p>

			<p className="">
				<StyleDirectionIcon>
					<FaLocationArrow />
				</StyleDirectionIcon>{" "}
				<span>{windDirection}</span>
			</p>
		</StyledWindStatus>
	);
};

export default WindStatus;
