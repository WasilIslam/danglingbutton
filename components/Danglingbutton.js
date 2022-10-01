import React, { useState } from 'react'
import "./style.css"
export default function Danglingbutton({ valid = false, handleClick = () => { alert("button clicked") } }) {
    const [right, setRight] = useState(0);
    const handleMouseOver = () => {
        if (!valid) {
            let random = right - ((Math.random() * 30) + 20);
            if (Math.floor(Math.random() * 2)) {
                random = right + ((Math.random() * 30) + 20);
            }
            if (random > 100) {
                random = random - 100
            }
            else if (random < 0) {
                random = random + 100
            }
            setRight(random)
        }
    }
    const handleLogin = () => {
        handleClick()
    }
    return (
        <div className='danglingContainer'>
            <button onClick={handleLogin} onMouseOver={handleMouseOver} className={`${valid ? "valid" : "invalid"}`} style={{ right: right + "%" }}>Sign in</button>
        </div>
    )
}
