import React from 'react'


interface DisplayProps {
    value: string

}

const Display: React.FC<DisplayProps> = ({value}) => {
    const infinityToError = (value: string): string => {
        return value === "Infinity" ? "오류" : value;
    }

    return (
        <h1 id="total">{infinityToError(value)}</h1>
    )

}


export default Display

