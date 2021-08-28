import  React,{ useEffect , useState } from 'react';
import Sidebar from './SideBar'
import Body,{ val } from './Body'
import Footer from './Footer'
import "./Player.css"
import { list } from "./Footer"
// replacement for <Body />
import "./Body.css"
import Header from "./Header"
import SongRow from "./SongRow"

//importing progress bar 
import { makeStyles } from '@material-ui/core/styles';
import  LinearProgress  from '@material-ui/core/LinearProgress';

//Replacement for Footer
import "./Footer.css"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { useDataLayervalue } from './DataLayer';
import Nav_bar  from './Nav_bar';
import ContinuousSlider from './ContinuousSlider';
import LinearDeterminate from './LinearDeterminate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
var song_element = document.createElement("AUDIO");
let song_duration = 0;




function playAudio() { 
    song_element.play(); 
    } 

function pauseAudio() { 
      song_element.pause(); 
    } 
     
function song(p,isPlaying){
                                song_element.setAttribute("src",`${p}.mp3`);
                                song_element.setAttribute("controls", "controls");
                                song_element.setAttribute("autoplay","true");
                                song_element.setAttribute("style","display:none")
                                song_element.load();
                                song_duration = song_element.duration;
                                document.body.appendChild(song_element);
}




function Player(props){
    
    let song_state = true;
    const [curr, setstate] = useState(0);
    let n = props.songlist.length;
    const [progress,setProgress] = useState(0);
    return (
        <div className="_player">
            
            <div className="_player_body">
                <div className = "_sidebar">
                    <Sidebar />
                </div>
                <div className = "_body">
                    <div className="__body">
                        <Header />
                        <div className="_body_songs">
                        {props.songlist.map((item,i) => 
                            <div className="song_row">
                                <div>
                            <a key={item.ID} onClick={() => {
                                setstate(song_element => i);
                                }} >
                            <SongRow title={item.title} photo={item.img_src} artist={item.artist} index={i+1}/>
                            </a>
                            </div>
                            <div className="fav" >
                            <a key={item.ID} href = "" onClick={() => {
                                let obj = item;
                                obj.is_fav = !obj.is_fav ;
                                const arr = props.songlist ;
                                arr[i] = obj ;
                                console.log(arr);
                                props.changeState(arr);
                                //song_favorites[i] = !song_favorites[i];
                            }}>
                                {item.is_fav  ? (<div><FavoriteIcon /></div>) : (<div><FavoriteBorderIcon /></div>)}
                                </a>
                            </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="footer"> 
            {song(props.songlist[curr].src)}
                        <div className = "_footer" >   
                       <div className="_footer_left">
                           <img src={props.songlist[curr].img_src} />
                            <div className="_currentPlaying_info">
                                <h4>{props.songlist[curr].title}</h4>
                                <p>{props.songlist[curr].artist}</p>
                            </div>
                        </div>
                       <div className="_footer_center">
                        {/* Previous Song*/ }
                        <div className="_footer_center_icons">
                                <a onClick={
                                    () => {
                                        if(curr == 0)setstate(i => n-1);
                                        else
                                        setstate(i => (i-1)%n);                             
                                    }
                                }>
                                    <SkipPreviousIcon className="_icon_skip" /></a>

                                <a onClick={() => 
                                {
                                    
                                      if(song_state == true)
                                      {
                                          pauseAudio();
                                          song_state = false;
                                      }
                                      else
                                      {
                                          playAudio();
                                          song_state = true;
                                      }
                                  
                                }} >
                                    <PlayCircleFilledWhiteIcon className="_icon_play" />
                                    </a>
                                <a onClick={
                                    () => {
                                        setstate(song_element => (song_element+1)%n);
                                    }
                                }>
                                    <SkipNextIcon className="_icon_next" /></a>
                        </div>
                            <div className="_footer_center_nav" >
                               <LinearDeterminate song_len={song_duration} />
                            </div>
                       </div>

                       <div className="_footer_right">footer right</div>

                    </div>
            </div>
           
           
        </div>
    );
}

export default Player;