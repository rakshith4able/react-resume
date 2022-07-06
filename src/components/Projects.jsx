import React from 'react';
import Heading from './Heading';
import styled from 'styled-components';
import { BsTerminal } from 'react-icons/bs';
import { GoPrimitiveDot, GoLinkExternal } from 'react-icons/go';
import Point, { StyledPoint } from './Point';
import Badge from './Badge';

const Project = styled.div`
  padding: ${(props) => props.theme.padding.a};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectTitle = styled(StyledPoint)`
  display: flex;
  & h2,
  & svg {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: 600;
    color: ${(props) => props.theme.primary};
  }
`;

const Link = styled.a`
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: 600;
  color: ${(props) => props.theme.primary};
`;

const Technologies = styled.div`
  padding: ${(props) => props.theme.padding.a};
  display: flex;
`;

const Body = styled.div`
  font-size: ${(props) => props.theme.fontSize.h3};
  background: ${(props) => props.theme.overlay};
`;

export default function Projects() {
  return (
    <>
      <Heading>
        <BsTerminal /> <span>Projects</span>
      </Heading>
      <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>Assistive System for Visionless Earthlings using ML</h2>
          </ProjectTitle>
          <Link href='https://github.com/rakshith4able/Blind-Assistant-App'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>TensorFlow</Badge>
          <Badge>Android</Badge>
          <Badge>GTTS</Badge>
          <Badge>Team Size: 4</Badge>
        </Technologies>

        <Body>
          <Point>
            This project is focused on assisting visually impaired people with
            the help of an android application.
          </Point>
          <Point>
            The application helps by providing details about the name of object,
            its distance and direction.
          </Point>
          Role:
          <Point>
            Successfully implemented distance calculation of detected object in
            the continuous image frames.
          </Point>
          <Point>Integrated text to speech to provide voice output.</Point>
        </Body>
      </Project>
      <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>Data Cipher</h2>
          </ProjectTitle>
          <Link href='https://data-cipher.herokuapp.com/'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>PHP</Badge>
          <Badge>AES-128</Badge>
        </Technologies>

        <Body>
          <Point>
            This is a web application built on top of the AES-128 cryptography
            algorithm.
          </Point>
          <Point>
            It allows users to upload their files and encrypt and decrypt the
            file using their desired password.
          </Point>
        </Body>
      </Project>

      <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>LinkedIn Jobs Application Automation</h2>
          </ProjectTitle>
          <Link href='https://github.com/rakshith4able/Automated-LinkedIn-Jobs_Applying-Bot'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>Python</Badge>
          <Badge>Selenium</Badge>
        </Technologies>

        <Body>
          <Point>
            This project is a python script to automate job applications in
            linkedIn.
          </Point>
          <Point>
            The application allows to apply for all the jobs with single step
            present in the given link.
          </Point>
        </Body>
      </Project>

      <Project>
        <Header>
          <ProjectTitle>
            <GoPrimitiveDot />
            <h2>React Colors</h2>
          </ProjectTitle>
          <Link href='https://rakshith4able.github.io/massive-color-project/'>
            <GoLinkExternal />
          </Link>
        </Header>

        <Technologies>
          <Badge>React</Badge>
          <Badge>Chroma.js</Badge>
        </Technologies>

        <Body>
          <Point>
            This is a color picker project and It has functionalities to pick
            color values in HEX, RGB, and RGBA format.
          </Point>
          <Point>
            It allows to change the intensity of colors and also to choose from
            different shades of the same color using the slider.
          </Point>
        </Body>
      </Project>
    </>
  );
}
