import styled from "styled-components";

export const StyledWeatherOverview = styled.div`
	padding: 20px 10px;
	min-height: 100vh;
	flex-basis: 30%;
	background: url("./images/Cloud-background.png"), #1e213a;
	background-repeat: no-repeat;
	background-size: 130%;
	background-blend-mode: soft-light;
	background-position: left -55px top 35px;

	.search-icon {
		font-size: 32px;
		cursor: pointer;
	}

	.search-icon svg {
		border-radius: 50%;
		background-color: #6e707a;
		padding: 5px;
	}

	button {
		background-color: #6e707a;
		color: #e7e7eb;
		outline: none;
		border: none;
		padding: 5px 15px;
		font-size: 16px;
	}

	.weather-image {
		margin-top: 35px;
	}

	.weather-value {
		margin-top: 35px;
	}

	.weather-value p {
		color: #a09fb1;
		font-size: 32px;
		font-weight: 600;
	}

	.weather-value .temp-value {
		color: #e7e7eb;
		font-size: 80px;
	}

	.weather-value .temp-value span {
		color: #a09fb1;
		font-size: 32px;
	}

	.other-value {
		margin-top: 35px;
		color: #88869d;
		font-size: 16px;
	}

	.other-value .location-name {
		text-transform: capitalize;
	}

	.error {
		color: red;
		text-align: center;
	}

	@media (max-width: 768px) {
		width: 100%;
		img {
			width: 50%;
		}
	}
`;
