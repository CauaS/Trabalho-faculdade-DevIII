import React from 'react'
import '../styles/buttonMenu.css'

export default function ButtonMenu({ background, text, children }) {
    return(
        <div className="container-button" style={{ background }}>
            { children }
            <span>{text}</span>
        </div>
    )
}