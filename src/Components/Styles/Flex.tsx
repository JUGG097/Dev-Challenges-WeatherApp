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

	@media (max-width: 912px) {
		flex-direction: column;
	}
`;
