import React from "react";
import { StyledVisibilityCard } from "./Styles/VisibilityCard.styled";

const VisibilityCard: React.FC<{ visibilityValue: number }> = ({
	visibilityValue,
}) => {
	return (
		<StyledVisibilityCard>
			<p>Visibility</p>
			<p className="visibility-value">
				{Math.round(visibilityValue)}
				<span> miles</span>
			</p>
		</StyledVisibilityCard>
	);
};

export default VisibilityCard;
