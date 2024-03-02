import React from 'react'

const DISPLAY_INFINITY_VALUE = "오류"

interface DisplayProps {
    value: string

}

const Display: React.FC<DisplayProps> = ({value}) => {
    const infinityToError = (value: string): string => {
        return value === "Infinity" ? DISPLAY_INFINITY_VALUE : value;
    }

    return (
        <h1 id="total">{infinityToError(value)}</h1>
    )

}


export default Display

