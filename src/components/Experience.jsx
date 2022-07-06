import React from "react";
import Heading from "./Heading";
import { MdOutlineWorkOutline } from "react-icons/md";
import styled from "styled-components";
import Badge from "./Badge";
import Point from "./Point";

const Content = styled.div`
  display: grid;
  grid-template-areas:
    "role duration"
    "work work";
  padding: ${(props) => props.theme.padding.a};
  font-size: ${(props) => props.theme.fontSize.h3};
`;

const Role = styled.div`
  grid-area: role;

  & h3 {
    color: ${(props) => props.theme.primary};
  }
`;

const Duration = styled.div`
  grid-area: duration;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Work = styled.div`
  grid-area: work;
  font-size: ${(props) => props.theme.fontSize.h3};
  background: ${(props) => props.theme.overlay};
`;

export default function Experience() {
  return (
    <>
      <Heading>
        <MdOutlineWorkOutline /> <span>Experience</span>
      </Heading>

      <Content>
        <Role>
          <h3>Software Engineer</h3>
          <p>Cloudside Technologies, Bengaluru</p>
        </Role>
        <Duration>
          <Badge style={{ width: "113px", textAlign: "center" }}>
            Dec 2021- Present
          </Badge>
        </Duration>
        <Work>
          <Point>
            Designing user interfaces to interact with the applications using
            React.
          </Point>
          <Point>Enhancing user experience.</Point>
          <Point>Working with Mapbox GL API.</Point>
          <Point>Testing and deploying applications.</Point>
        </Work>
      </Content>

      <Content>
        <Role>
          <h3>Web Developer Intern</h3>
          <p>ATEU Softwares, Mysuru</p>
        </Role>
        <Duration>
          <Badge style={{ width: "113px", textAlign: "center" }}>
            Aug 2020 - Sept 2020
          </Badge>
        </Duration>
        <Work>
          <Point>Designed and developed responsive websites.</Point>
          <Point>
            Developed file security web application based on AES 128bit
            algorithm.
          </Point>
          <Point>
            Designed and developed official website of ATEU Softwares.
          </Point>
        </Work>
      </Content>
    </>
  );
}
