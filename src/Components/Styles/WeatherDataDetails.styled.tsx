import styled from "styled-components";

export const StyledWeatherDataDetailed = styled.div`
	padding: 20px 50px;
	flex-basis: calc(100% - 30%);
	background-color: #100e1d;
	min-height: 100vh;

	.temp-choice {
		text-align: right;
		/* color: #e7e7eb; */
	}

	.temp-choice span {
		margin: 5px;
		background-color: #585676;
		border-radius: 50%;
		padding: 5px 10px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		cursor: pointer;
	}

	.temp-choice .active {
		background-color: #e7e7eb;
		color: #110e3c;
	}

	.today-highlights h4:first-child {
		font-size: 24px;
		font-weight: 700;
	}

	.error {
		color: red;
		text-align: center;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;
