import styled from "styled-components";

export const StyledPageContainer = styled.div``;

export const StyledFailedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 5rem;

  gap: 2rem;

  button {
    padding: 1rem;
    border-radius: 0.5rem;

    border: none;
    background: var(--gray);
  }
`;
