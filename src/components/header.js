import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const StyledHeader = styled.header`
background: transparent;
width: 100vw;
position: fixed;
margin: 0 auto;
padding: 3% 8%;
display: flex;
justify-content: space-between;
align-items: center;
opacity: ${({showHeader})=> showHeader ? 1 : 0 };
transition: all .5s ease-out;
z-index: 2;
`

const Logo = styled.div`
  width: max-content;
  span{
    font-size: 2rem;
  }`
const MenuItems = styled.div`
display: flex;
justify-content: space-around;
width: 40%;
span {
margin-right: 1%;
}
`

const Header = ({ showHeader, siteTitle }) => (
  <StyledHeader showHeader={showHeader}>
    <Logo>
      <span>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </span>
    </Logo>
    <MenuItems>
    <span>
      who we are
    </span>
    <span>
      what do we do
    </span>
    <span>
      contribute
    </span>
    </MenuItems>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: 'Valasai',
}

export default Header
