import React from 'react'
import './styles.css';
import Spinner from '../spinner'
import  Tooltip from 'rc-tooltip'
import PropTypes from 'prop-types';

const TooltipWrapper= React.memo((props)=>{
    if(props.tooltip){
        return (
            <Tooltip 
                transitionName="rc-tooltip-zoom" 
                placement="bottom"  
                trigger={['hover', 'click']} 
                overlay={props.tooltip}
            >     
                    {props.children}
            </Tooltip>
        )
    }
    else{
        return props.children
    }
})


const Button = React.memo((props)=>{
    return(
        <TooltipWrapper 
            tooltip={props.tooltip}
        >
            <div className="vrs-btn-container" >
                {props.loading &&
                    <div className="vrs-btn-shield"/>
                }
                <div {...props} className={["vrs-btn-subcontainer", props.theme?[props.theme]:""].join(" ")}>
                    {props.icon && !(props.theme==="vrs-icon-btn" && props.loading) && props.icon}
                    {props.label &&
                        <div className={["vrs-label", props.theme?[props.theme]:""].join(" ")}
                            style={{marginBottom: 0}}
                        >
                            {props.label}
                        </div>
                    }
                    {props.loading &&
                        <div className={["vrs-btn-spinner", props.theme?[props.theme]:""].join(" ")}>
                            <Spinner color={props.theme==="vrs-icon-btn"?"grey":""}/>
                        </div>
                    }
                </div>
            </div>
        </TooltipWrapper>
    )
})

Button.propTypes = {
    /** Enables loading state of button */
    loading: PropTypes.bool,
    /** Theme of the button */
    theme: PropTypes.oneOf(["vrs-btn-primary", "vrs-btn-secondary", "vrs-btn-icon-only", "vrs-btn-icon"]),
    /** This function is called when button is clicked */
    onClick: PropTypes.func,
    /** Custom styles can be assigned to button, but they will be only applied to div with container class*/
    style: PropTypes.object,
    /** Custom styles can be assigned to button via assigning class, 
     * but class will be only applied to div with container class*/
    className: PropTypes.any,
    /** Text displayed on the button*/
    label: PropTypes.string,
    /** Icon on the button*/
    icon: PropTypes.any,
     /** If tooltip is assigned value, it will be displayed one someone hovers on the button. Value can be string or JSX*/
    tooltip: PropTypes.any,
};

export default Button