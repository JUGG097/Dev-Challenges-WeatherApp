import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	/* align-items: center; */
	flex: 1;

	.first-div {
		padding: 20px 10px;
		min-height: 100vh;
		flex-basis: 30%;
		background: url("./images/Cloud-background.png"), #1e213a;
		background-repeat: no-repeat;
		background-size: 130%;
		background-blend-mode: soft-light;
		background-position: left -55px top 35px;
	}

	.search-div {
		min-height: 100vh;
		flex-basis: 30%;
		background-color: #1e213a;
		/* color: #e7e7eb; */
	}

	.search-div .close-btn {
		text-align: right;
		padding: 5px 10px;
		cursor: pointer;
	}

	.search-div svg {
		font-size: 32px;
	}

	.second-div {
		padding: 20px 50px;
		flex-basis: calc(100% - 30%);
		background-color: #100e1d;
		min-height: 100vh;
	}

	.first-div .search-icon {
		font-size: 32px;
	}

	.first-div .search-icon svg {
		background-color: #6e707a;
		border-radius: 50%;
		padding: 5px;
	}

	.first-div button {
		background-color: #6e707a;
		color: #e7e7eb;
		outline: none;
		border: none;
		padding: 5px 15px;
		font-size: 16px;
	}

	.first-div .weather-image {
		margin-top: 35px;
	}

	.first-div .weather-value {
		margin-top: 35px;
	}

	.first-div .weather-value p {
		color: #a09fb1;
		font-size: 32px;
		font-weight: 600;
	}

	.first-div .weather-value .temp-value {
		color: #e7e7eb;
		font-size: 80px;
	}

	.first-div .weather-value .temp-value span {
		color: #a09fb1;
		font-size: 32px;
	}

	.first-div .other-value {
		margin-top: 35px;
		color: #88869d;
		font-size: 16px;
	}

	.second-div .temp-choice {
		text-align: right;
		/* color: #e7e7eb; */
	}

	.second-div .temp-choice span {
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

	.second-div .temp-choice .active {
		background-color: #e7e7eb;
		color: #110e3c;
	}

	.second-div .today-highlights h4:first-child {
		font-size: 24px;
		font-weight: 700;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		.first-div {
			width: 100%;
		}
		.search-div {
			width: 100%;
		}

		.second-div {
			width: 100%;
		}

		.first-div img {
			width: 50%;
		}
	}
`;
