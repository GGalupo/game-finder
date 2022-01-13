import styled from "styled-components";

export const StyledPageContainer = styled.div`
  margin-top: 0.5rem;

  .screenshots-container {
    h2 {
      margin: 1rem 0 2rem;
      text-align: center;
    }

    > span {
      font-size: 1.25rem;
    }

    .screenshots {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }

  @media (min-width: 1100px) {
    .screenshots-container {
      h2 {
        text-align: left;

        font-size: 2rem;

        margin-bottom: 3rem;
      }

      .screenshots {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
`;

export const StyledPageHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  margin-bottom: 1.75rem;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

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
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-areas: "thumb info";
    grid-template-columns: 365px auto;

    .thumb {
      grid-area: thumb;

      &::after {
      }
    }

    .info {
      grid-area: info;

      align-items: flex-start;

      margin-left: 3.5rem;
    }
  }
`;

export const StyledGameInfo = styled.div`
  display: flex;
  flex-direction: column;

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
      margin: 2rem 0.2rem;
      display: flex;
      justify-content: center;
      gap: 1.25rem;

      align-items: center;
    }
  }

  .requirements {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-bottom: 0.75rem;
    }
    span {
      color: var(--gray);

      line-height: 2rem;
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-areas: "description requirements";
    grid-template-columns: auto 280px;

    .description {
      grid-area: description;
      margin-right: 2rem;

      .buttons-container {
        justify-content: flex-end;
      }
    }

    .requirements {
      grid-area: requirements;
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
