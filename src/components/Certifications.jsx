import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import { GiRibbonMedal } from "react-icons/gi";
import { SiHackerrank, SiCoursera } from "react-icons/si";

const Certification = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: flex-end;
  align-items: center;
  padding: ${(props) => props.theme.padding.t};
`;

const Certificate = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.text};

  & svg {
    font-size: ${(props) => props.theme.fontSize.logo};
    color: ${(props) => props.theme.primary};
  }
`;

const Details = styled.div`
  margin-left: ${(props) => props.theme.padding.a};
  display: flex;
  flex-direction: column;

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

export default function Certifications() {
  return (
    <div>
      <Heading>
        <GiRibbonMedal />
        <span>CERTIFICATIONS</span>
      </Heading>
      <Certification>
        <Certificate href="https://www.hackerrank.com/certificates/455cd8a160cf">
          <SiHackerrank />
          <Details>
            <h3>Javascript (Intermediate)</h3>
            <p>HackerRank</p>
            <p>Credential ID 455CD8A160CF</p>
          </Details>
        </Certificate>
        <Certificate href="https://www.coursera.org/account/accomplishments/specialization/certificate/CXWCWYKX5Q7M">
          <SiCoursera />
          <Details>
            <h3>Python For Everybody</h3>
            <p>Coursera</p>
            <p>Credential ID CXWCWYKX5Q7MF</p>
          </Details>
        </Certificate>
        <Certificate href="https://www.hackerrank.com/certificates/82fc7e1326d4">
          <SiHackerrank />
          <Details>
            <h3>React (Basic)</h3>
            <p>HackerRank</p>
            <p>Credential ID 82FC7E1326D4</p>
          </Details>
        </Certificate>
      </Certification>
    </div>
  );
}
