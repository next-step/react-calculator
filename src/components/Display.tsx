import React from 'react'


interface DisplayProps {
    value: string

}

const Display: React.FC<DisplayProps> = ({ value}) => {
    const infinityToError = (value: string): string => {
        if (value === "Infinity") {
            return "오류"
        }
        return value
    }

    return (
        <div className="display">
            {infinityToError(value)}
        </div>
    )

}


export default Display

