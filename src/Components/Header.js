import React from 'react'
import "../css/main.css";


const Header = () => {
  return (
    <div>
        <header>
            <div className="container">
                <div className="logo">
                    <h3>Frontend</h3>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="https://github.com/RahulSingh9131" target="blank">Github</a></li>
                        <li><a href="https://twitter.com/singhrahul3112" target="blank">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/rahul-singh-06b83917a/" target="blank">LinkedIn</a></li>
                    </ul>
                </div> 
            </div>
        </header>
    </div>
  )
}

export default Header