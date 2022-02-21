import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	/* align-items: center; */
	flex: 1;

	.loading-div {
		min-height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search-div {
		padding: 20px 20px;
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

	.search-div h4 {
		margin: 0;
		font-weight: 700;
		color: #a09fb1;
	}

	.search-div .input-text svg {
		position: absolute;
		transform: translate(7px, 7px);
		width: 15px;
		/* transform: translateX(10px); */
		color: gray;
	}

	.search-div .input-text input {
		height: 45px;
		width: 100%;
		padding: 10px 10px 10px 30px;
		background: transparent;
		border: 1px solid #e7e7eb;
		color: #e7e7eb;
	}

	.search-div .search-btn {
		height: 100%;
	}

	.search-div .search-btn button {
		height: 100%;
		width: 100%;
	}

	.search-div .popular-cities {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 10px;
		cursor: pointer;
	}

	.search-div .popular-cities:hover {
		border: 1px solid #616475;
		span {
			color: #e7e7eb;
		}
	}

	.search-div .popular-cities p {
		margin: 0;
		font-weight: 500;
	}

	.search-div .popular-cities span {
		color: transparent;
	}

	.search-div .error {
		color: red;
		text-align: center;
	}

	.second-div {
		padding: 20px 50px;
		flex-basis: calc(100% - 30%);
		background-color: #100e1d;
		min-height: 100vh;
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

	.second-div .error {
		color: red;
		text-align: center;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		.search-div {
			width: 100%;
			padding: 20px 15px;
		}

		.second-div {
			width: 100%;
		}
	}
`;
