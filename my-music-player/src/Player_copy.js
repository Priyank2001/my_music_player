import  React,{ useState } from 'react';
import Sidebar from './SideBar'
import  Now_playing from './Now_Playing';
import "./Player.css"

// replacement for <Body />
import "./Body.css"
import Header from "./Header"
import SongRow from "./SongRow"


//Replacement for Footer
import "./Footer.css"
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import LinearDeterminate from './LinearDeterminate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import  Row_menu  from './Row_menu';
var song_element = document.createElement("AUDIO");
song_element.className = "MyAudio"
let song_duration = 0;



let count = 0;
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
                                document.body.appendChild(song_element);
}

class Queue{
    constructor(){
        this.arr = new Array();
    }
    push(i){
        this.arr.push(i);
    }
    front(){
        return this.arr[0];
    }
    back(){
        return this.arr[this.arr.length - 1];
    }
    pop(){
        if(this.arr.length == 0) return;
        this.arr.shift();
    }
    length(){
        return this.arr.length ;
    }
    isEmpty(){
        if(this.arr.length == 0) return true;
        return false;
    }
    
    isEqualto(a){
        this.arr = a.arr;
    }
}


function Player_copy(props){
    
    let song_state = true;
    const a = new Array();
    a.push(0);
    const [songQueue,set_songQueue] = useState(a);
    const [songlist,setSongList] = useState(props.list);
    const [curr, setstate] = useState(0);
    //	const [currSong, set_currSong] = useState(songlist[songQueue[0]);
    let n = songlist.length;
    const [progress,setProgress] = useState(0);
    const handleFav = (i,e) => {
        e.preventDefault();
        const arr = [...songlist];
        arr[i].is_fav = !arr[i].is_fav; 
        setSongList(arr);
        return;
    }
    const handleMenuClick = (i,e) => {

    }
    const handleCurr = (i,e) => {
        e.preventDefault();
        set_songQueue([i]);
        setstate(a => i);
        
        return ;
    }
    const handleAddToQueue = (i,e) => {
        e.preventDefault();
        const p = [...songQueue];
        p.push(i);
        set_songQueue(p);
        //console.log(p);
    }
    const handleRemoveFromQueue = (i,e) => {
        e.preventDefault();
        console.log("i : " )
        const p = [...songQueue];
        let idx = 0;
        for(; idx < p.length ; idx++)
            if(p[idx] == i)
        if(idx != p.length)
        p.splice(idx,1);
        set_songQueue(p);
        console.log(idx,p);
    }
    const [now_playing,setNowPlaying] = useState(false);
    
    const handleChangePlayer = (e) => {
        e.preventDefault();
        setNowPlaying(!now_playing);
    }
    const elem =  now_playing ? (<Now_playing songlist={songlist} songQueue={songQueue} change={handleChangePlayer} removeFromQueue={handleRemoveFromQueue} />) : (
        <div className="_player">
            {song(songlist[songQueue[0]].src)}
            <div className="_player_body">
                <div className = "_sidebar">
                    <Sidebar change={(e) => handleChangePlayer(e)} />
                </div>
                <div className = "_body">
                    <div className="__body">
                        <Header />
                        <div className="_body_songs">
                        {songlist.map((item,i) => 
                            (<div className="song_row">
                                <div className="song_title">
                            <a key={item.ID} onClick={(e) => handleCurr(i,e)} >
                            <SongRow key={i} title={item.title} photo={item.img_src} artist={item.artist} index={i+1}/>
                            </a>
                            </div>
                            <div className="fav" >
                                <div className="fav_button">
                            <a key={item.ID} href = "" onClick={(e) => handleFav(i,e)}>
                                {item.is_fav  ? <div><FavoriteIcon style={{color:"#fc5603"}}/></div> : <div><FavoriteBorderIcon style={{color:"grey"}} /></div>}
                                </a>
                                </div>
                                <div className="drop_menu">
                                    <Row_menu make_fav={(e) => handleFav(i,e)} addToQueue={handleAddToQueue} removeFromQueue={handleRemoveFromQueue} idx={i} />
                                </div>
                            </div>
                            
                            </div>
                            
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="footer"> 
            
                        <div className = "_footer" >   
                       <div className="_footer_left">
                           <a onClick={(e) => handleChangePlayer(e)} >
                           <img className="_footer_left_img" src={songlist[songQueue[0]].img_src} />
                           </a>
                            <div className="_currentPlaying_info">
                                <h4>{songlist[songQueue[0]].title}</h4>
                                <p>{songlist[songQueue[0]].artist}</p>
                            </div>
                        </div>
                       <div className="_footer_center">
                        {/* Previous Song*/ }
                        <div className="_footer_center_icons">
                                <a onClick={
                                    (e) => {
                                        if(curr == 0)handleCurr(n-1,e);
                                        else
                                        handleCurr((curr-1)%n,e);                             
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
                                    (e) => {
                                        if(curr == n-1)handleCurr(0,e);
                                        else
                                        handleCurr((curr+1),e);                             
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
    
    return (
        elem
         
    );
}

export default Player_copy;
