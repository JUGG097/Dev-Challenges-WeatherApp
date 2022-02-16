import styled from "styled-components";

export const StyledWindStatus = styled.div`
	background-color: #1e213a;
	padding: 10px 20px;
	min-height: 100%;

	p {
		font-size: 14px;
		font-weight: 500;
	}

	p:first-child {
		font-size: 16px;
	}

	.wind-value {
		font-size: 60px;
		font-weight: 700;
	}

	.wind-value span {
		font-size: 30px;
		font-weight: 500;
	}
`;

export const StyleDirectionIcon = styled.span`
	background-color: rgba(255, 255, 255, 0.3);
	padding: 5px;
	border-radius: 50%;

	/* margin: 5px;
	background-color: #585676;
	border-radius: 50%;
	padding: 5px 10px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	cursor: pointer; */

	svg {
		/* transform: rotate(-120deg); */
	}
`;
