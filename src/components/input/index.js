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
                <div className="vrs-input-container">
                    {this.props.prefix &&
                        <div className="vrs-input-prefix">{this.props.prefix}</div>
                    }
                    <input 
                        ref={this.input}
                        {...this.props}
                        className={["vrs-input", this.props.className?this.props.className:""].join(" ")}
                        style={{
                            border: this.props.error?"1px solid #f86f50": "1px solid #c2c5cc",
                            borderTopLeftRadius: this.props.prefix?0:9,
                            borderBottomLeftRadius: this.props.prefix?0:9,
                            borderTopRightRadius: this.props.suffix?0:9,
                            borderBottomRightRadius: this.props.suffix?0:9,
                            ...this.props.style,              
                        }}
                    />
                    {this.props.suffix && 
                        <div className="vrs-input-suffix">{this.props.suffix}</div>
                    }
                </div>
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
    /** Display prefix block*/
    prefix: PropTypes.string,
    /** Display suffix block*/
    suffix: PropTypes.string,
};

export default Input