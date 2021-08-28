import React from 'react';
import "./Header.css"



function Header() {
        return (
            <div className="_header">
                <div className="_header_img" ><img  src = "https://i.pinimg.com/originals/e1/5c/f0/e15cf09f1ac022d8f6f92900ef486966.jpg" alt="" /></div>
                <div className = "para">
                   <h3>Music Chill</h3>   
                   <br /> 
                   <p>It is time for yout to enjoy your music</p>
                </div>
                <div className="profile_info">
                    <img className="_profile_pic" src="https://i.pinimg.com/originals/e9/be/67/e9be67dd130aee203aaed715ddfcf75c.png"></img>
                    <h5>Zoro</h5>
                </div>
            </div>
        );
}

export default Header;