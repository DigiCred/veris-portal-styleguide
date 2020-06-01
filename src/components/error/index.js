import React from 'react'
import './styles.css'

const Error = React.memo((props)=>{
    return(
        <div className="vrs-error" {...props}>
            {props.children}
        </div>
    )
}) 

export default Error