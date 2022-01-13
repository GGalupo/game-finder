import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <div className="loader" />
      <span>Loading...</span>
    </LoadingContainer>
  );
};
