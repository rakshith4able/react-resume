import React from 'react';
import styled from 'styled-components';
import {FaMobileAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {ImGithub,ImLinkedin} from 'react-icons/im';
import {MdPerson} from 'react-icons/md';

const Intro=styled.div`
display:grid;
grid-template-areas:"name  name contact"
                    "address  social social";
grid-template-columns:minmax(max-content,max-content) 2
fr 1fr;
padding:${props=>props.theme.padding.a};


&>div:nth-of-type(1){
  grid-area:name;
  & h1{
    font-size:${props=>props.theme.fontSize.h1};
    font-weight:500;
    text-transform:uppercase;
    color:${props=>props.theme.primary};
  }

 
}

&>div:nth-of-type(2){
  grid-area:address;

  & h3{
    font-size:${props=>props.theme.fontSize.h3};
    font-weight:400;
    color:${props=>props.theme.text};
  }
}

&>div:nth-of-type(3){
  grid-area:contact;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:space-evenly;
}



`;

const Contact=styled.a`
  display:grid;
  grid-template-columns:min-content max-content;
  text-decoration:none;
  color:${props=>props.theme.primary};
  font-size:${props=>props.theme.fontSize.h3};
  align-items:center;
  justify-content:center;

  & h3{
    width:100%;
    margin-left:1%;
    font-size:${props=>props.theme.fontSize.h3};
    font-weight:400;
    color:${props=>props.theme.text};
  }

`;

const Social=styled.div`
  grid-area:social; 
  display:flex;
  align-items:flex-end;
  font-size:${props=>props.theme.fontSize.h3};
  

  &>div{
    display:flex;
    flex:1;
    justify-content:space-between;
  }
`;

const Network=styled.a`
  text-decoration:none;
  color:${props=>props.theme.text};
  display:grid;
  grid-template-columns:max-content max-content;
  justify-content:center;
  align-items:center;
  color:${props=>props.theme.primary};
  font-size:${props=>props.theme.fontSize.h3};
  
  & h3{
    color:${props=>props.theme.text};
    font-size:${props=>props.theme.fontSize.h3};
    font-weight:400;
    padding-left:${props=>props.theme.padding.l};
  }
`;



export default function Introduction() {
    return (
        <Intro>         
            <div>
                <h1>Rakshith Raj Gurupura Puttaraju</h1>                
            </div>

            <div>
              <h3>Gurupura Village and Post,<br/>Hunsur Taluk,<br/>Mysore District,<br/>Karnataka, India - 571105  </h3>
            </div>

            <div>
            <Contact href="tel:+91-8971640371">
                <FaMobileAlt/>
                <h3>+91-8971670371</h3>  
            </Contact>
            <Contact href="mailto:rakshithraj.gp11@gmail.com">
                <MdEmail/>
                <h3>rakshithraj.gp11@gmail.com</h3>  
            </Contact>
            </div>

            <Social>
              <div>
                <Network href="https://linkedin.com/in/rakshithrajgp">
                    <ImLinkedin/>
                   <h3>linkedin.com/in/rakshithrajgp</h3>
                </Network>
                <Network href="https://github.com/rakshith4able">
                    <ImGithub/>
                   <h3>github.com/rakshith4able</h3>
                </Network>
                <Network href="https://rakshith4able.github.io/portfolio">
                    <MdPerson/>
                  <h3>rakshith4able.github.io/portfolio</h3>
                </Network>
              </div>

            </Social>

        </Intro>
    )
}
