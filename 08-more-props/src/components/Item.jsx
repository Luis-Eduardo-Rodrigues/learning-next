import React from 'react';
import PropTypes from "prop-types"

function components(props) {
  return (
    <>
    <li>{props.marca} - {props.lancamento}</li>
    </>
  )
}

export default components;