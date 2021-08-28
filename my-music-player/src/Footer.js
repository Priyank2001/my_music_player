import React from 'react'
import "./Footer.css"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

export const list = [];
//var audio = new Audio('./First Time.mp3');
//audio.play();




function Footer({currentPlaying}) {
    return (
        
        <div className = "_footer" >  
        <div className="_audio_tag"> 
            <audio controls className="_audio">
                {console.log(`http://127.0.0.1:8080/src/music/${currentPlaying.src}.mp3`)}
                <source src={`http://127.0.0.1:8080/src/music/${currentPlaying.src}.mp3`} />
            </audio>
        </div> 
           <div className="_footer_left">
               <img src={currentPlaying.img_src} />
                <div className="_currentPlaying_info">
                    <h4>{currentPlaying.title}</h4>
                    <p>{currentPlaying.artist}</p>
                </div>
            </div>
           <div className="_footer_center">
                <a><SkipPreviousIcon className="_icon_skip" /></a>
                <a onClick={() => 
                {
                    console.log("clicking");
                }} >
                    <PlayCircleFilledWhiteIcon className="_icon_play" />
                    </a>
                <a><SkipNextIcon className="_icon_next" /></a>
           </div>
            
           <div className="_footer_right">footer right</div>
            
        </div>
    )
}


export default Footer
