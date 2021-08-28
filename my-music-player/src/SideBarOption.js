import React from 'react';
import "./SideBarOption.css"

function SideBarOption({Icon , title}){
    return (
        <div className="_sidebar_option">
        {Icon && <Icon className="sideBarOption_icon"  />}
        {Icon ? <h5>{title}</h5> : <p>{title}</p>}
        </div>
    );
}

export default SideBarOption;