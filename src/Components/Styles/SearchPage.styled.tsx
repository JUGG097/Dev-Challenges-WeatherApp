import styled from "styled-components";

export const StyledSearchPage = styled.div`
	padding: 20px 20px;
	min-height: 100vh;
	flex-basis: 30%;
	background-color: #1e213a;

	.close-btn {
		text-align: right;
		padding: 5px 10px;
		cursor: pointer;
	}

	svg {
		font-size: 32px;
	}

	h4 {
		margin: 0;
		font-weight: 700;
		color: #a09fb1;
	}

	.input-text svg {
		position: absolute;
		transform: translate(7px, 7px);
		width: 15px;
		/* transform: translateX(10px); */
		color: gray;
	}

	.input-text input {
		height: 45px;
		width: 100%;
		padding: 10px 10px 10px 30px;
		background: transparent;
		border: 1px solid #e7e7eb;
		color: #e7e7eb;
	}

	.search-btn {
		height: 100%;
	}

	.search-btn button {
		height: 100%;
		width: 100%;
	}

	.popular-cities {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 10px;
		cursor: pointer;
	}

	.popular-cities:hover {
		border: 1px solid #616475;
		span {
			color: #e7e7eb;
		}
	}

	.popular-cities p {
		margin: 0;
		font-weight: 500;
	}

	.popular-cities span {
		color: transparent;
	}

	.error {
		color: red;
		text-align: center;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 20px 15px;
	}
`;
