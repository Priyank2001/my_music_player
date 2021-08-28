import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function SimpleMenu({index,removeFromQueue}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = (e) => {
      e.preventDefault();
      removeFromQueue(index,e);
      handleClose();
  }


  return (
    <div>
      <a onClick={handleClick}>
        <MoreVertIcon className="_vertDot" style={{color:"white"}} />
      </a>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Add To Favorites</MenuItem>
        <MenuItem onClick={(e) => handleRemove(e) }>Remove from Queue</MenuItem>

      </Menu>
    </div>
  );
}