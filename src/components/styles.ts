import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 330px;

  a {
    height: 380px;

    position: relative;

    display: flex;
    flex-direction: column;

    border: 1px solid grey;
    border-radius: 0.5rem;

    .thumb {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    > div {
      padding: 0.75rem;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 2rem;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      time {
        font-weight: bold;

        margin: 0.2rem 0 1.5rem;
      }

      p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        text-align: justify;
        line-height: 1.5rem;

        color: #a2a2a2;
      }
    }
  }

  @media (min-width: 800px) {
    width: 100%;

    a {
      height: 206px;
      display: grid;
      grid-template-columns: 365px 1fr;
      grid-template-areas: "thumb content";

      > div {
        grid-area: content;

        p {
          -webkit-line-clamp: 3;
        }
      }

      .thumb {
        grid-area: thumb;

        border-bottom-left-radius: 0.5rem;
        border-top-right-radius: 0;
      }
    }
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.75);
  }
`;
