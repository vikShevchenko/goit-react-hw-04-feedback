import PropTypes from 'prop-types'
import React from 'react'
import './Section.styled.css'

const Section = ({ title, children }) => {

  return (
    <div className='section'>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
export default Section