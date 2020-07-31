import React from 'react'
import './styles.css'
import Label from '../label'
import Error from '../error'

const Textarea = React.memo((props)=>{
    return (
        <React.Fragment>
            <Label>{props.label}</Label>
            <textarea className="vrs-textarea" 
                style={{
                    border: props.error?"1px solid #f86f50": "1px solid #c2c5cc",
                }}
                {...props}
            />
            <Error>{props.error}</Error>
        </React.Fragment>
    )
})

export default Textarea