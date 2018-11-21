import React from 'react'
import MenuItem from './menu-item'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 1px solid #C0E5F0;
  color: #fff;
`

const Header = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <MenuItem page="/about" title="About"/>
        <MenuItem page="/contact" title="Contact"/>
      </div>
    </div>
  </Container>
)

export default Header
