import React from 'react'
import ReactToggle from 'react-toggle'
import PropTypes from 'prop-types';

const Toggle = React.memo((props)=>{
    return <ReactToggle icons={false} {...props}/>
})

Toggle.propTypes = {
    /** If enabled shows icons on the toggle */
    icons: PropTypes.bool,
};

Toggle.defaultProps = {
    icons: false
};

export default Toggle