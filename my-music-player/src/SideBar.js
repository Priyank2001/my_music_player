import React from 'react';
import "./SideBar.css"
import SideBarOption from "./SideBarOption"
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function SideBar({change})
{
    return (
        <div className="_sideBar">
            {/* <img className="_sidebar_img" src="https://wallpapercave.com/wp/wp2326979.jpg" alt="" /> */}
            <img className="_sidebar_img" src="https://play-lh.googleusercontent.com/fDqcZukIaLIrq6lSTnu5INnYDomTIs2OUWXDtjWbDbsWjD0sdzNJ-WpO0hg3uGUB_CyF" alt="" />
            <SideBarOption Icon={LibraryMusicIcon} title="Library" />
            <a onClick={(e) => change(e) }>
            <SideBarOption Icon={PlayArrowIcon} title="Now Playing" />
            </a>
        </div>

    );
}

export default SideBar;