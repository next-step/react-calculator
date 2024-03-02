import React from 'react'

interface ButtonProps {
    onClick: () => void
    text: string
    id?: string
}

const Button: React.FC<ButtonProps> = ({onClick, text, id}) => {
    return (
        <button id={id} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
