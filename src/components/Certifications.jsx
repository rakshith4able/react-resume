import React from 'react';
import Heading from './Heading';
import styled from 'styled-components';
import { GiRibbonMedal } from 'react-icons/gi';
import { SiHackerrank, SiCisco } from 'react-icons/si';

const Certification = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

  display: flex;
  flex-direction: column;
  margin:${props=>props.theme.margin} 0;
  margin-left: ${(props) => props.theme.padding.a};
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
        <Certificate href='https://www.hackerrank.com/certificates/455cd8a160cf'>
          <SiHackerrank />
          <Details>
            <h3>Javascript (Intermediate)</h3>
            <p>HackerRank</p>
          </Details>
        </Certificate>
        <Certificate href='https://www.credly.com/badges/d003f15a-4014-489e-bb03-84ead5bbda5f?source=linked_in_profile'>
          <SiCisco />
          <Details>
            <h3>Introduction to Cybersecurity</h3>
            <p>Cisco</p>
          </Details>
        </Certificate>
        <Certificate href='https://drive.google.com/file/d/1XdyJBN8F3F-XlD83f8GynJGKcjeHe6Lt/view?usp=sharing'>
          <SiCisco />
          <Details>
            <h3>NDG Linux Unhatched</h3>
            <p>Cisco</p>
          </Details>
        </Certificate>
      </Certification>
    </div>
  );
}
