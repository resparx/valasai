import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const LayoutStyles = styled.div`
`


const Layout = ({ children, pageLocation }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  
  const handleScroll = (e) => {
    if(e.target.scrollTop > 50){
      // setShowHeader(true)
    } else {
      // setShowHeader(false)
    }
  }

  // const showHeader = ;

  return (
    <LayoutStyles>
      <Header showHeader={pageLocation.pathname !== '/'} siteTitle={data.site.siteMetadata.title} />
        <main onScroll={handleScroll}>{children}</main>
        <footer>
        </footer>
    </LayoutStyles>
  )
}

Layout.propTypes = {
  showHeader: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
