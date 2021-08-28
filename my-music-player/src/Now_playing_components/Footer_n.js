import React, {useState} from 'react'
import "./Footer_n_2.css"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import RepeatIcon from '@material-ui/icons/Repeat';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      justifyContent:'space-between'
    },
    paper: {
      height: 110,
      width: 400,
      backgroundColor:"grey",
    },
    control: {
      padding: theme.spacing(0),
    },
    section: {
      height: "100%",
    }
  }));


const StyledMenu = withStyles({
  paper:{
    border: '1px solid #d3d4d5'
    
  },
})((props) => (
  <Menu elevation={0} getContentAnchorEl={null} anchorOrigin={
    {vertical:'bottom', horizontal:'center',}} transformOrigin={{vertical:'top',horizontal:'center'}} 
    {...props} />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "grey",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
})) (MenuItem);




const Footer_n = ({song}) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [anchorEl,setAnchorEl] = useState(null);
    const handleChange = (event) => {
      setSpacing(10);
    };
    
    const handleOpenFooterMenu = (e) =>{
      e.preventDefault();
      setAnchorEl(e.currentTarget);
    }
    const handleCloseFooterMenu = () => {
      setAnchorEl(null);
    }
    
    return (
        <div className="_footer_n">
            <div className="_footer_n_controls_div">
                <div>
                <SkipPreviousRoundedIcon fontSize="medium" />
                <PlayArrowRoundedIcon    fontSize="medium" />
                <SkipNextRoundedIcon     fontSize="medium" />
                </div>
            </div>
            <div className="_footer_n_songDetails">
                <div className="_footer_n_songDetails_img_div"> 
                <img src={song.img_src} className="_footer_n_songDetails_img" />
                </div>  
                <div className="_footer_n_curr_song">
                    <h4>
                        {song.title}
                    </h4>
                    <h5>
                        {song.artist}
                    </h5>
                </div>
                <div className="_footer_n_center_icons">
                  <ThumbDownOutlinedIcon className="_icons_center" />
                  <ThumbUpOutlinedIcon className="_icons_center" />
                  <a onClick={(e)=>{handleOpenFooterMenu(e)}} >
                  <MoreVertSharpIcon  className="_icons_center" />
                  </a>
                  <StyledMenu id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleCloseFooterMenu} > 
                        <StyledMenuItem>
                          <ListItemIcon>
                            <AddToPhotosIcon />
                          </ListItemIcon>
                          <ListItemText primary="Add To Favorites" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                        <ListItemIcon>
                            <MusicNoteIcon/>
                          </ListItemIcon>
                          <ListItemText primary="Go To Artist" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                        <ListItemIcon>
                            <RemoveCircleOutlineOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Remove From Queue" />
                        </StyledMenuItem>

        
                  </StyledMenu>
                </div>
            </div>
            <div className="_footer_right">
              <div>
                <ShuffleIcon  className="_icons_right" />
                <VolumeUpIcon className="_icons_right" />
                <RepeatIcon   className="_icons_right" />
              </div>
            </div>
        </div>
    );
     /* 
     
       return (      
           <div className="_footer_n_div">
            
            <Grid container className={classes.root} spacing={2} className="_Grid_parent">

            <Grid container justifyContent="space-between" spacing={5} className="_grid">
            <Grid key={0} item className={classes.section} style={{padding:"0px"}}>
            <div className="_footer_n_controls_div">
                <SkipPreviousRoundedIcon fontSize="medium" />
                <PlayArrowRoundedIcon fontSize="medium" />
                <SkipNextRoundedIcon fontSize="medium" />
            </div>
            </Grid>
            <Grid key={1} item>
            <div className="_footer_n_songDetails">

              <img src={song.img_src} className="_footer_n_songDetails_img" />

              <div className="_footer_n_curr_song">
                  <h4>
                      {song.title}
                  </h4>
                  <h5>
                      {song.artist}
                  </h5>
              </div>
              <div className="_footer_n_center_icons">
                <ThumbDownOutlinedIcon  />
                <ThumbUpOutlinedIcon />
                <a onClick={(e)=>{handleOpenFooterMenu(e)}} >
                <MoreVertSharpIcon />
                </a>
                <StyledMenu id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleCloseFooterMenu} > 
                      <StyledMenuItem>
                        <ListItemIcon>
                          <AddToPhotosIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add To Favorites" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                      <ListItemIcon>
                          <MusicNoteIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Go To Artist" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                      <ListItemIcon>
                          <RemoveCircleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Remove From Queue" />
                      </StyledMenuItem>


                </StyledMenu>
              </div>
            </div>
                          </Grid>
            <Grid key={2} item>
             
        </Grid>
      </Grid>
      
    
    </Grid>
           </div>
       )
       */
}
export default Footer_n;