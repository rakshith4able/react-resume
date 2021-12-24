import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { GiArchiveResearch } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";

const Container = styled.div`
  padding: ${(props) => props.theme.padding.t}
    ${(props) => props.theme.padding.a};
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.h3};
  text-align: justify;
  svg {
    margin-top: 2px;
    align-self: flex-start;
    flex: 5%;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
`;

export default function Publications() {
  return (
    <>
      <Heading>
        <GiArchiveResearch />
        <span>Publications</span>
      </Heading>
      <Container>
        <Point>
          <GoPrimitiveDot />
          <p>
            {" "}
            Rakshith Raj G P,Sameer Khalid,Sudeep K S, Shirish P Rajan and
            Prasanna Patil (July 2021), The
            <b>
              “Assistive System for Visionless Earthlings using ML”,
              International Journal of Advanced Research in Computer and
              Communication Engineering (IJARCCE), Volume 10 - Issue 07, ISSN:
              2278-1021, DOI: 10.17148/IJARCCE.2021.10795
            </b>{" "}
            Available online at{" "}
            <a href="https://ijarcce.com/wp-content/uploads/2021/08/IJARCCE.2021.10795.pdf">
              https://ijarcce.com/wp-content/uploads/2021/08/IJARCCE.2021.10795.pdf
            </a>
          </p>
        </Point>
      </Container>
    </>
  );
}
