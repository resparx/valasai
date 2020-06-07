import React, {useState, useEffect , useRef} from "react"
import { Router, Link, Location, navigate } from "@reach/router"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styled, { css } from "styled-components"
import Layout from "../components/layout"

// import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "./HomePage";
import WhatWeDo from "./WhatWeDo";
import ArticlePage from "./ArticlePage"

const HomePageWrapper = styled.div`
height: 100vh;
overflow-x: scroll;
background-image: transparent;
transition: all 100ms ease-out; 
background: #000000;

`


// const ThdFold = styled.section`
// height: 100%;
// p{
//   text-align: center;
//   margin: 4% 0 4%;
//   display: inline-block;
//   width: 100%;
//   font-size: 62px;
// }
// span {
//   font-size: 16px;
//   display: block;
//   padding: 0 5%;
//   text-align: center;
// }
// `
// const CardContainer= styled.div`
//   width: 80%;
//   height: 50%;
//   padding: 4%;
//   max-height: 80%;
//   margin: 4% auto;
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `

// const Card = styled.div`
//   display: block;
//   width: 20%;
//   background: blue;
//   p {

//   }
// `



const IndexPage = () => {
  const [mainTextIn,setMainTextIn] = useState(true);
  const [pageLocation,setPageLocation] = useState({});

  const secondFoldRef = useRef();

  useEffect(()=>{
  },[]);


  const handleScroll = (e) => {
    const scrollTopOffset = e.target.scrollTop

    // console.log( secondFoldRef.current.getBoundingClientRect(),"getBoundingClientRect")
    console.log( scrollTopOffset,"scrollTopOffset")
    // console.log(scrollTopOffset,"scrollTopOffset")
   if (scrollTopOffset > 50 && mainTextIn){
    setMainTextIn(false)
    navigate('/WhatWeDo')
   }
  //  else if( scrollTopOffset === 0){
  //   setMainTextIn(true)
  //  }

  //  if(scrollTopOffset > 700 && scrollSecFold) {
    // scrollTo();
    // console.log( secondFoldRef.current.getBoundingClientRect(),"window")
    // setScrollSecFold(false)
  //  } 
  //  else if(scrollTopOffset < 10 && !scrollSecFold) {
    // animateScroll.scrollTo(100);
    // console.log( secondFoldRef.current.offsetTop,"window else if")
  //  }
  }
  

  const FadeTransitionRouter = props => (
    <Location>
      {({ location }) => {
         setPageLocation(location);
        return (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            {/* the only difference between a router animation and
                any other animation is that you have to pass the
                location to the router so the old screen renders
                the "old location" */}
            <Router location={location} className="router">
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}}
    </Location>
  )

  return (
  <Layout pageLocation={pageLocation}>
    <SEO title="Home" />
     <HomePageWrapper onScroll={handleScroll}>
      <FadeTransitionRouter>
        <WhatWeDo path="/WhatWeDo" mainTextIn={mainTextIn} />
        <HomePage path="/" mainTextIn={mainTextIn} />
        <ArticlePage path="posts/:postID" />
      </FadeTransitionRouter>
       
        {/* <SndFold 
          ref={secondFoldRef}
          // secFoldAssest={secFoldContent[Math.floor(Math.random() * 6)]}
          name={'SndFold'}>
            <SndFoldComponent/>
      </SndFold>

      <ThdFold>
        <p></p>
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
      </ThdFold>  */}
      </HomePageWrapper> 
  </Layout>
)}

export default IndexPage
