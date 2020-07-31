import React from 'react'
import './styles.css'
import Label from '../label'
import Error from '../error'

const Checkbox=React.memo((props)=>{
    return(
        <div className="vrs-checkbox-container">
            <label className="vrs-checkbox-subcontainer">
                <input className="vrs-checkbox" {...props} type="checkbox"
                    style={{
                        border: props.error?"1px solid #f86f50": "1px solid #c2c5cc",
                    }}
                />
                <span className="vrs-label vrs-checkbox-label">{props.label}</span>
            </label>
            <Error>{props.error}</Error>
        </div>
    )
})

export default Checkbox