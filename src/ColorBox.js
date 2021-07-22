import React, { Component } from 'react'
import {choice} from './helpers'

export default class ColorBox extends Component {


    constructor(props){
        super(props)
        this.state={
            color: choice(this.props.colorArray)
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (){
        let newColor;
        do {
        newColor = choice(this.props.colorArray);
        } while (newColor===this.state.color) 
        this.setState({color:newColor})
    }

    render() {
        return (
            <div onClick=
            {this.handleClick} 
            style=
            {{display:'flex', 
            backgroundColor:`${this.state.color}`, 
            width: '150px', 
            height:'150px', 
            border:'none', 
            margin:'none', 
            padding:'none'}}>
            </div>
        )
    }
}
