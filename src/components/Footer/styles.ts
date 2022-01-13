import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 4rem;

  z-index: 10;

  background: var(--background);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  bottom: 0;

  border-top: 2px solid var(--gray);

  > span {
    padding: 0 1rem;
    text-align: center;

    svg {
      font-size: 1rem;
      color: red;

      margin: 0 0.4rem;
    }

    a:hover {
      text-decoration: underline;
    }

    &:first-child {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 370px) {
    height: 2.5rem;
  }
`;
