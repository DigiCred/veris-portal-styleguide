import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

const Spinner = (props) =>(
    <div 
        style={{
            borderBottom:  `3px solid ${props.color?props.color:"white"}`,
            borderLeft: `3px solid ${props.color?props.color:"white"}`,
            width: props.size?props.size:10,
            height: props.size?props.size:10
        }}
        className="vrs-spinner"
    />
)

Spinner.propTypes = {
    /** Determines color of the spinner */
    color: PropTypes.string,
    /** Determines size of the spinner */
    size:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default Spinner;