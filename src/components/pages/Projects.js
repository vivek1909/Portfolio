import React from "react";
import styled from "styled-components";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Roboto", sans-serif;

  h2 {
    color: #089;
    font-weight: bold;
  }
`;

const Projects = () => (
  <MainWrapper>
    <h2>PROJECTS</h2>
    <p>Coming Soon!</p>
  </MainWrapper>
);

export default Projects;
