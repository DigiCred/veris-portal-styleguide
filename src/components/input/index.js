import React, {Component} from 'react'
import './styles.css'
import Label from '../label'
import Error from '../error'
import PropTypes from 'prop-types';


class Input extends Component{
    constructor(props){
        super(props)
        this.input=React.createRef()
    }
    focus(){
        this.input.current.focus()
    }
    render(){
        return(
            <React.Fragment>
                {this.props.label && 
                    <Label>{`${this.props.label} ${this.props.isRequired?"*":""}`}</Label>
                }
                <input 
                    ref={this.input}
                    className={["vrs-input", this.props.className?this.props.className:""].join(" ")}
                    style={{
                        border: this.props.error?"1px solid #f86f50": "1px solid #c2c5cc"
                    }}
                    {...this.props}
                />
                <Error>{this.props.error}</Error>
            </React.Fragment>
        )  
    }
}

Input.propTypes = {
    /** Field label. It can be a string or JSX */
    label: PropTypes.any,
    /** To display error in the input value */
    error: PropTypes.string,
};

export default Input