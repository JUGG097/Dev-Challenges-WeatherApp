import React from "react";
import { StyledVisibilityCard } from "./Styles/VisibilityCard.styled";

const VisibilityCard: React.FC = () => {
	return (
		<StyledVisibilityCard>
			<p>Visibility</p>
			<p className="visibility-value">
				6,4<span> miles</span>
			</p>
		</StyledVisibilityCard>
	);
};

export default VisibilityCard;
