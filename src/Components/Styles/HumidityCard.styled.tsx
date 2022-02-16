import styled from "styled-components";

export const StyledHumidityCard = styled.div<{ value: string }>`
	background-color: #1e213a;
	padding: 10px 20px;

	p {
		font-size: 14px;
		font-weight: 500;
	}

	p:first-child {
		font-size: 16px;
	}

	.humidity-value {
		font-size: 60px;
		font-weight: 700;
	}

	.humidity-value span {
		font-size: 30px;
		font-weight: 500;
	}

	.progress-container {
		height: 5px;
		width: 100%;
		background-color: #e7e7eb;
		border-radius: 50px;
		margin: 5px;
	}

	.progress-filler {
		height: 100%;
		width: ${(props) => props.value};
		background-color: #ffec65;
		border-radius: inherit;
		text-align: right;
	}

	.progress-label {
		margin: 0;
		display: flex;
		justify-content: space-between;
	}
	.progress-label span {
		font-size: 12px;
	}

	.progress-label-percent {
		margin: 0;
		text-align: right;
		font-size: 12px;
	}
`;
