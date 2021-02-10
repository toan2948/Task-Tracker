import React from 'react'
import PropTypes from 'prop-types'

const Header = ({name}) => {
    const header_name = 'toan header'
    const headingStyle = {
        color: 'red'
    }
  
    return (
        <div className="header">
            <h1 style = {{ color: 'red' }}>{name}</h1>            
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
