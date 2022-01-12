import styled from "styled-components";

export const StyledPageContainer = styled.div`
  margin-top: 0.5rem;

  .screenshots {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      margin: 1rem 0;
    }
  }
`;

export const StyledPageHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-bottom: 1.75rem;

  h1 {
    margin-top: 0.75rem;
  }

  time {
    font-weight: bold;
    font-size: 1.2rem;
  }

  span {
    line-height: 1.5rem;
  }
`;

export const StyledGameInfo = styled.div`
  .description {
    p {
      font-size: 1.1rem;
      line-height: 1.5rem;

      color: var(--gray);

      & + p {
        margin-top: 0.75rem;
      }
    }

    .buttons-container {
      margin: 1.5rem 0.2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .requirements {
    h3 {
      margin-bottom: 0.75rem;
    }
    span {
      color: var(--gray);

      line-height: 2rem;
    }
  }
`;

export const StyledButton = styled.button<{ buttonType: "back" | "play" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  width: 140px;
  height: 60px;
  gap: 0.5rem;

  border-radius: 0.5rem;
  font-size: 1rem;

  ${({ buttonType }) =>
    buttonType === "back"
      ? `
        border: 1px solid var(--gray);
        background: none;
        color: var(--gray);

      `
      : `
        border: 1px solid var(--white);
        background: var(--green);
        color: var(--white);
        font-weight: bold;
      `};

  svg {
    font-size: 1.5rem;
  }
`;

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
