import React, {Component} from 'react'
import './styles.css'
import ReactSelect from 'react-select' 
import {ReactSVG} from 'react-svg'
import Label from '../label'
import Error from '../error'
import jump from 'jump.js'
import PropTypes from 'prop-types';


const DropdownIndicator = props => {
    return (
        <div
            className="vrs-select-caretIconContainer"
            style={{
                transform : props.selectProps.menuIsOpen? "rotateX(180deg)" : "rotateX(0deg)"
            }}
        >        
            <ReactSVG  
                beforeInjection={svg => {
                    svg.firstElementChild.innerHTML=""
                    svg.classList.add("vrs-select-caretIcon")
                }}
                src="/assets/icons/arrow-circle-down.svg "
            />
        </div>

    );
  };

class Select extends Component{
    constructor(props){
        super(props)
        this.state={
            shake: false
        }
        this.select=React.createRef()
    }
    focus=()=>{
        if(this.props.id){
            jump(`#${this.props.id}`,{
                duration:500,
                offset:-100
            }) 
        }
        this.select.current.focus()
        this.select.current.setState({
            menuIsOpen: true
        })
    } 
    render(){
        const customStyles = {
            control: (provided, state) => ({
              ...provided,
              border: this.props.error?"1px solid #f86f50": "1px solid #c2c5cc",
              borderRadius: "9px", 
              fontSize: "14px",
              lineHeight: "22px",
              paddingLeft:"12px",
              minHeight: "36px",
              boxSizing:"border-box",
              boxShadow: "none",
              '&:hover': {
                borderColor: !state.isFocused ? '#c2c5cc' : "#6a6afe"
              },     
            }),
            valueContainer: (provided, state) => ({
                ...provided,
                padding:"0px",
                margin:"0px;",
            }),
            singleValue: (provided, state)=>({
                ...provided,
                color: "#6e7380"
            }),
            dropdownIndicator: (provided, state) => ({
                ...provided,
                padding:"7px",
                paddingRight: "12px",
            }),
            clearIndicator:(provided, state)=>({
                ...provided,
                padding:"7px"
            }),
            indicatorSeparator: (provided, state) => ({
                display:"none"
            }),
            placeholder: (provided, state) => ({
                ...provided,
                color: "#6e7380",
            }),
            input: (provided, state) => ({
                ...provided,
                color: "#6e7380",
            }),
            menu: (provided, state) => ({
                ...provided,
                borderRadius: "9px",
                padding: "6px 12px",
            }),
            option: (provided, state) => ({
                ...provided,
                borderRadius: "5px",
                backgroundColor: "white",
                color: "#6e7380",
                fontSize: "14px",
                boxSizing:"border-box",
                '&:hover': {
                    backgroundColor: "#fafbfd",
                    cursor: "pointer"
                },  
            }),
            ...this.props.styles
        }
        return(
            <React.Fragment>    
                {this.props.label &&
                    <Label>{`${this.props.label} ${this.props.isRequired?"*":""}`}</Label>
                }     
                <div id={this.props.id} className={["vrs-select",this.state.shake?"vrs-select-shake":""].join(" ")}>
                    <ReactSelect
                        {...this.props}
                        styles={customStyles}
                        ref={this.select}
                        components={{DropdownIndicator: DropdownIndicator}}
                    />
                </div>
                <Error>{this.props.error}</Error>
            </React.Fragment>
        )
    }  
}

Select.propTypes = {
   /** Field label. It can be a string or JSX */
   label: PropTypes.any,
   /** To display error in the input value */
   error: PropTypes.string,
};

export default Select