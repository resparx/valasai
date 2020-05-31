import React, {useState, useEffect , useRef} from "react"
import styled, { css } from "styled-components"
import { Transition, CSSTransition } from 'react-transition-group';
import { animateScroll, scroller  } from 'react-scroll';
import Layout from "../components/layout"

// import Image from "../components/image"
import SEO from "../components/seo"

const HomePage = styled.div`
height: 100vh;
overflow-x: scroll;
background-image: url('https://i.imgur.com/JuotK0A.jpg');
background-size: cover;
background-position: center;
transition: all 100ms ease-out; 

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

const SndFold = styled.section`
height: 100%;
background: #000000;
position: relative;

& > div {
  position: absolute;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({secFoldAssest})=> secFoldAssest ? `url(${secFoldAssest.img})` : `transparent`};
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: all 1500ms cubic-bezier(0.09, 0.34, 0, 1.54);
  clip-path: inset(0 0 0 0);

  & > span {
  font-size: 80px;
  text-align: center;
  color: #ffffff;
  line-height: 1;
  ::after {
    content: '';
    background: #FFFFFF;
    display: block;
    width: 570px;
    height:6px;
    left: 110px;
    position: relative;
  }
}
}
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
  const [mainTextIn,setMainTextIn] = useState(true);

  const secondFoldRef = useRef();

  useEffect(()=>{
  },[])

  const secFoldContent = [
    {
      img: "https://i.imgur.com/H9utx9q.jpg",
      content: "Sunt elit nulla nisi minim adipisicing veniam laborum consequat enim minim aute duis"
    },
    {
      img: "https://i.imgur.com/GTWw2Xa.jpg",
      content: "In in cupidatat deserunt culpa ut magna non incididunt culpa qui magna nostrud enim Lorem."
    },
    {
      img: "https://i.imgur.com/yJxdM22.jpg",
      content: "Eu voluptate nostrud nostrud consequat labore irure fugiat dolore dolore veniam tempor."
    },
    {
      img: "https://i.imgur.com/uPHqKwv.jpg",
      content: "Proident duis qui culpa voluptate quis laborum ea est nulla velit commodo id duis."
    },
    {
      img: "https://i.imgur.com/PHAQnG2.jpg",
      content: "Mollit eiusmod incididunt cillum amet minim non consectetur sit."
    },
    {
      img: "https://i.imgur.com/a7YIqVI.jpg",
      content: "Fugiat duis ex est nisi reprehenderit commodo laboris aliqua qui sit enim."
    }
  ];


  const handleScroll = (e) => {
    const scrollTopOffset = e.target.scrollTop

    // console.log( secondFoldRef.current.getBoundingClientRect(),"getBoundingClientRect")
    console.log( scrollTopOffset,"scrollTopOffset")
    // console.log(scrollTopOffset,"scrollTopOffset")
   if (scrollTopOffset > 150 && mainTextIn){
    setMainTextIn(false)
   }
   else if( scrollTopOffset === 0){
    setMainTextIn(true)
   }

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
  

  


const HomeComponent = () => <Transition timeout={{
  appear: 100,   
  enter: 300,
  exit: 300
}}
appear 
in={mainTextIn}>
{state => {
  console.log(state,"statestatestatestate")
const defaultStyle = {
  transition: `all .5s ease`
};

  const transitionStyles = {
    entering: { opacity: .4}, 
    entered: { opacity: 1},
    exiting:  { opacity: .6},
    exited: { opacity: 0 }
  };
  
  return(
  <div style={{...defaultStyle,...transitionStyles[state]}}>
  <h1 >Valasai.</h1>
  <span>Lorem Ipsum is simply dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
  </div>
)}}
</Transition>
  return (
  <Layout>
    <SEO title="Home" />
    <HomePage onScroll={handleScroll}>
      <FstFold>
       <HomeComponent/>
      </FstFold>
        <SndFold 
          ref={secondFoldRef}
          // secFoldAssest={secFoldContent[Math.floor(Math.random() * 6)]}
          name={'SndFold'}>
        <div>
        <span>WHAT WE DO</span>
        </div>
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
      </ThdFold>
      </HomePage>
  </Layout>
)}

export default IndexPage
