import styled from "styled-components";

export const StyledDayCardFlex = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	div {
		flex-basis: 18%;
		/* flex-grow: 0 0 18%; */
	}

	@media (max-width: 768px) {
		div {
			flex-basis: 44%;
			margin-top: 10px;
		}
	}
`;
export const StyledDayCard = styled.div`
	background-color: #1e213a;
	padding: 10px 5px;
	text-align: center;

	div {
		display: flex;
		justify-content: space-around;
	}

	div span:first-child {
		color: #e7e7eb;
	}

	img {
		width: 80%;
		height: 100px;
		margin-top: -20px;
		margin-bottom: 30px;
		padding-right: 20px;
	}

	div .min-temp-value {
		color: #a09fb1;
	}

	div .min-temp-value span {
		color: #a09fb1;
	}
`;
