import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./SongRow.css"

function SongRow(props) {
        let a = false;
        return (
            <div>
            <div className="_songRow">
                <h4 className="_songRow_index" >{props.index}</h4>
                <img className="_songRow_img" src={props.photo} alt ="" />
                <div className="_songRow_title">
                <h4>{props.title}</h4>
                <p>{props.artist}</p>
                </div>
                
            </div>

            </div>
        );
    }


export default SongRow;