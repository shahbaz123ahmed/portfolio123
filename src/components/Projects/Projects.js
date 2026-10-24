import React from "react";
import ProjectSlider3D from "./ProjectSlider3D";
import styled from "@emotion/styled";

const ProjectsSection = styled.section`
  padding: 4rem 0 3rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.32em;
  font-size: 12px;
  font-weight: 600;
  color: #4674e9;
  margin-bottom: 12px;
`;

const SliderWrapper = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 1.5rem;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <Eyebrow>Showcase</Eyebrow>
        <h2 className="SectionTitle">Featured Projects</h2>
      </SectionHeader>
      <SliderWrapper>
        <ProjectSlider3D />
      </SliderWrapper>
    </ProjectsSection>
  );
}

export default Projects;
