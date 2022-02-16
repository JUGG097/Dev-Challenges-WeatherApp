import React from "react";
import {
	StyledWindStatus,
	StyleDirectionIcon,
} from "./Styles/WindStatus.styled";
import { FaLocationArrow } from "react-icons/fa";

const WindStatus: React.FC = () => {
	return (
		<StyledWindStatus>
			<p>Wind Status</p>
			<p className="wind-value">
				7<span>mph</span>
			</p>

			<p className="">
				<StyleDirectionIcon>
					<FaLocationArrow />
				</StyleDirectionIcon>{" "}
				<span>WSW</span>
			</p>
		</StyledWindStatus>
	);
};

export default WindStatus;
