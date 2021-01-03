import React from 'react'
import {Button} from 'react-materialize'

export default function CustomButton({childern, text,className, handleClick}) {
    return (
        <div>
            <Button
            node="button"
            waves="light"
            className={className}
            onClick={handleClick}>
                {childern}
                {text}
                
            </Button>
            
        </div>
    )
}
