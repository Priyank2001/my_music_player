import React from 'react'
import "./Top_bar.css"
const Top_bar = ( {change} ) => {
    return (
    <div className="_topbar">
        <div className="_topbar_img_div">
            <a onClick={(e) => {e.preventDefault();change(e)}}>
            <img className="_topbar_img" src="https://play-lh.googleusercontent.com/fDqcZukIaLIrq6lSTnu5INnYDomTIs2OUWXDtjWbDbsWjD0sdzNJ-WpO0hg3uGUB_CyF" />
            </a>
        </div>
        <div className="_topbar_center">
            <div className="_topbar_heading"><h4>Home</h4></div>
            <div className="_topbar_heading"><h4>List</h4></div>
            <div className="_topbar_heading"><h4>Search</h4></div>
        </div>
        <div className="_topbar_userDetails">
            <div className="_topbar_userDetails_img"><img src="https://i.ytimg.com/vi/w83NNLRH3_0/maxresdefault.jpg" /></div>
            <div className="_topbar_username"><h4>Zoro</h4></div>
        </div>
    </div>);
}
export default Top_bar;