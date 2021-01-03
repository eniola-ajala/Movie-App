import React from 'react'
import {TextInput} from 'react-materialize'

export default function Textinput({label, placeholder, type, handleChange, value, name, handleKeyUp, error, className}) {
    return (
        <div>
            <label> {label}
                <TextInput placeholder={placeholder}
                 type={type}
                 value={value} 
                 name={name}
                 onKeyUp={handleKeyUp}
                  inputClassName="browser-default" 
                  onChange={handleChange}
                  className={className}>

                  </TextInput>
                </label>
            <p className="red-text">{error}</p>
        </div>
    )
}
