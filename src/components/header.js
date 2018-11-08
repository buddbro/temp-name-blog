import React from 'react'
import MenuItem from './menu-item'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
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
            color: 'white',
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
  </div>
)

export default Header
