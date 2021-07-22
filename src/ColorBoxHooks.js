import React, {useState} from 'react'
import {choice} from './helpers'

export default function ColorBoxHooks(props) {
    const [color,setColor] = useState(choice(props.colorArray))
    const handleClick =()=>{
        let newColor;
        do {
        newColor = choice(props.colorArray);
        } while (newColor===color) 
        setColor(newColor)

    }
    
    return (
        <div onClick=
        {handleClick} 
        style=
        {{display:'flex', 
        backgroundColor:`${color}`, 
        width: '150px', 
        height:'150px', 
        border:'none', 
        margin:'none', 
        padding:'none'}}>
        </div>
    )
}
