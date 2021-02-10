import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({name}) => {
    const header_name = 'toan header'
    const headingStyle = {
        color: 'red'
    }
  
    return (
        <div className="header">
            <h1 style = {{ color: 'red' }}>{name}</h1>
            {/* <h2 style ={headingStyle}>{header_name}</h2>
            <h2>{tit}</h2> */}
            
        </div>
    )
    Header.defaultProps = {
        tit: "Kr"
    }
    Header.propTypes = {
        name: PropTypes.string
    }
}


export default Header
