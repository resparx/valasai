import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { Link } from '@reach/router';

const HomeWrapper = styled.section`
  height: 100vh;
  transition: all .5s ease-in-out;
  background: url('https://i.imgur.com/JuotK0A.jpg');
  background-size: cover;
  background-position: center;
  h1 {
  color: #FFFFFF;
  font-size: 144px;
  padding: 22% 5% 0;
  margin-bottom: 5px;
  }
  span {
    padding: 0 5%;
    display: block;
    width: 60%;
    height: 70vh;
  }

`


const HomePage = ({mainTextIn}) => <Transition timeout={{
  appear: 100,   
  enter: 300,
  exit: 300
}}
appear 
in={mainTextIn}>
{state => {
const defaultStyle = {
  transition: `all .5s ease`
};

  const transitionStyles = {
    entering: { opacity: .4}, 
    entered: { opacity: 1},
    exiting:  { opacity: .6},
    exited: { opacity: .4 }
  };
  
  return(
  <HomeWrapper style={{...defaultStyle,...transitionStyles[state]}}>
  <h1 >Valasai.</h1>
  <span>Lorem Ipsum is simply dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
  </HomeWrapper>
)}}
</Transition>


export default HomePage