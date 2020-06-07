import React, {useState} from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

  const ArticleWrapper = styled.div`
    width: 100vw;
  `

  const Banner = styled.div`
    width: 100%;
    height: 40vh;
    background: url('https://i.imgur.com/GTWw2Xa.jpg');
    background-size: cover;

  `

const ArticlePage = () => {
  return <ArticleWrapper>
    <Banner>
      Ad aliqua incididunt consequat magna dolor eiusmod minim.
    </Banner>       
  </ArticleWrapper>
}


export default ArticlePage