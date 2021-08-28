import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Row_menu.css"
const Row_menu = ({make_fav , addToQueue , queue , idx , removeFromQueue}) => {
    const options= [
        'Add to Favorites',
        'Add to queue',
        'Go to Artist',
        'Remove From Queue'
    ];
    const ITEM_HEIGHT = 48;

    const [anchorEl, setanchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.preventDefault();
        setanchorEl(event.currentTarget);
    }
    const handleClose = (event,index) => {
        event.preventDefault();
        //console.log({idx});
        if(index == 0)
        make_fav(event,idx);
        if(index == 1)
        addToQueue(idx,event);
        if(index == 3)
        removeFromQueue(idx,event);
        setanchorEl(null);
    }
    return (
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon style={{color:"grey"}}/>
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '30ch',
              },
            }}
          >
            {options.map((option,index) => (
              <MenuItem key={option} onClick={(e) => handleClose(e,index)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );

}
export default Row_menu;