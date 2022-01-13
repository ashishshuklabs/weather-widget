import "./App.css";
import styled from "styled-components";
import { designVariables } from "./styles/globalVariables";
import { Content } from "./components/content/Content";

export const App = () => {
  return (
    <StyledApp className="App">
      <Content />
    </StyledApp>
  );
};
const StyledApp = styled.div`
  max-width: 120rem;
  width: 100%;
  height: 100vh;
  position: relative;
  /* margin-top: 10rem; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
