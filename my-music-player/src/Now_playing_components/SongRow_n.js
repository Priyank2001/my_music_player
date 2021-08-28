import React, { useState } from 'react'
import Divider from '@material-ui/core/Divider';
import "./SongRow_n.css"
import SongRow_n_menu from './SongRow_n_menu'
const SongRow = ({songs, removeFromQueue ,index }) => { 
    
    return (
        <div>
        <div className="_songrow">
            <div className="_song_img">
                <img src={songs.img_src}  />
            </div>
            <div className="_songDetails">
                <h4>{songs.title}</h4>
                <h5>{songs.artist}</h5>
            </div>
            <div>
            <SongRow_n_menu removeFromQueue={removeFromQueue} index={index} />
            </div>
        
        </div>
        </div>
    )
}   

export default SongRow;