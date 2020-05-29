import React, {useState, useRef} from "react"
import styled from "styled-components"
import { Transition } from 'react-transition-group';
import Scroll, { animateScroll  } from 'react-scroll';
import Layout from "../components/layout"

// import Image from "../components/image"
import SEO from "../components/seo"

const HomePage = styled.div`
height: 100vh;
overflow-x: scroll;
background-image: url('https://i.imgur.com/JuotK0A.jpg');
background-size: cover;
background-position: center;
/* transition: all 100ms ease-out;  */

`
const FstFold = styled.section`
height: 100%;
div {
  transition: all .5s ease-in-out;
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
  }
}

button {

}
`

const SndFold = styled.div`
height: 100%;
background: #000000;
`;

const LeftPart = styled.div`

`
const RightPart = styled.div`

`

const ThdFold = styled.section`
height: 100%;
p{
  text-align: center;
  margin: 4% 0 4%;
  display: inline-block;
  width: 100%;
  font-size: 62px;
}
span {
  font-size: 16px;
  display: block;
  padding: 0 5%;
  text-align: center;
}
`
const CardContainer= styled.div`
  width: 80%;
  height: 50%;
  padding: 4%;
  max-height: 80%;
  margin: 4% auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Card = styled.div`
  display: block;
  width: 20%;
  background: blue;
  p {

  }
`



const IndexPage = () => {
  const [scale,setScale] = useState(1)
  const [mainTextIn,setMainTextIn] = useState(true)
  const [scrollSecFold,setScrollSecFold] = useState(true)

  const secondFoldRef = useRef();

  const handleScroll = (e) => {
    const scrollTopOffset = e.target.scrollTop
    console.log(scrollTopOffset,"scrollTopOffset")
   if (scrollTopOffset > 150 && mainTextIn){
  //   setScale(2)
    setMainTextIn(false)
   }
   else if( scrollTopOffset === 0){
    setMainTextIn(true)
   }

   if(scrollTopOffset > 10 && scrollTopOffset < 900 && scrollSecFold) {
    setScrollSecFold(false)
    animateScroll.scrollTo(secondFoldRef.current.offsetTop);
    console.log( secondFoldRef.current.offsetTop,"window")
  //  } 
  //  else if(scrollTopOffset < 10 && !scrollSecFold) {
  //   scroll.scrollTo(100);
  //   console.log( secondFoldRef.current.offsetTop,"window else if")
   }
  }

  


const HomeComponent = () => <Transition in={mainTextIn} timeout={500}>
{state => {
  console.log(state,mainTextIn,"mainTextIn  statetransition: 'all 100ms ease-out',")
  const transitionStyles = {
    entering: { opacity: 1}, 
    entered: { opacity: 1},
    exiting:  { opacity: 0},
    exited: { opacity: 0}
  };
  
  return(
  <div style={{...transitionStyles[state]}}>
  <h1>Valasai.</h1>
  <span>Lorem Ipsum is simply dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
  </div>
)}}
</Transition>

  return (
  <Layout>
    <SEO title="Home" />
    <HomePage onScroll={handleScroll}>
      <FstFold scale={scale}>
       <HomeComponent/>
      </FstFold>
      <SndFold>

      </SndFold>

      <ThdFold ref={secondFoldRef}>
        <p>WHO WE ARE...</p>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        <CardContainer>
          <Card>

          </Card>
          <Card>
            
          </Card>
          <Card>
            
          </Card>
          <Card>
            
          </Card>
        </CardContainer>
      </ThdFold>
      </HomePage>
  </Layout>
)}

export default IndexPage
