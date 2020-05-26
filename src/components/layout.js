import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const LayoutStyles = styled.div`
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  
  const [showHeader,setShowHeader] = useState(false)
  const handleScroll = (e) => {
    if(e.target.scrollTop > 50){
      setShowHeader(true)
    } else {
      setShowHeader(false)
    }
  }

  return (
    <LayoutStyles>
      <Header showHeader={showHeader} siteTitle={data.site.siteMetadata.title} />
        <main onScroll={handleScroll}>{children}</main>
        <footer>
        </footer>
    </LayoutStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
