import styled from "styled-components";

export const StyledPageTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  max-width: 350px;
  margin: 3rem 0;

  span {
    font-size: 2.25rem;
    color: var(--gray);
  }

  @media (min-width: 800px) {
    max-width: 500px;
  }
`;

export const StyledDividerText = styled.span`
  width: 100%;
  display: block;
  text-align: center;
  overflow: hidden;
  color: var(--gray);
  margin: 1rem 0;

  &:before,
  &:after {
    background-color: var(--gray);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &:before {
    right: 0.5em;
    margin-left: -50%;
  }
  &:after {
    left: 0.5em;
    margin-right: -50%;
  }

  @media (min-width: 700px) {
    &:before,
    &:after {
      width: 35%;
    }
  }
`;

export const StyledSearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  border: 1px solid var(--white);
  border-radius: 0.5rem;

  .icon {
    padding: 10px;
    color: white;
    min-width: 40px;
    min-height: 40px;
    text-align: center;
  }

  input {
    background: var(--background);
    border: none;
    outline: none;
    height: 3rem;
    width: 100%;
    color: var(--white);
    padding: 0.5rem 1.25rem 0.5rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;
  }

  @media (min-width: 700px) {
    width: 50%;
  }
`;

export const StyledExploreText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 0.75rem;
`;
