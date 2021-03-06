import React, {Component} from 'react'
import ReactDateTime from 'react-datetime'
import Label from '../label'
import Error from '../error'
import PropTypes from 'prop-types';

class DateTime extends Component{
    constructor(props){
        super(props)
        this.dateTime= React.createRef()
    }
    focus(){
    }
    render(){
        return(
            <React.Fragment>
                {this.props.label && 
                    <Label>{`${this.props.label} ${this.props.isRequired?"*":""}`}</Label>
                }
                <ReactDateTime 
                    ref={this.dateTime}
                    inputProps={{
                        placeholder: this.props.placeholder? this.props.placeholder: "Type here...",
                        style: {
                            border: this.props.error?"1px solid #f86f50": "1px solid #c2c5cc"
                        }
                    }}
                    {...this.props}
                />
                <Error>{this.props.error}</Error>
                
            </React.Fragment>
        )
    }
}

DateTime.propTypes = {
    /** Field label. It can be a string or JSX */
    label: PropTypes.any,
    /** To display error in the input value */
    error: PropTypes.string,
 };

export default DateTime