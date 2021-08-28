import React,{useState} from 'react'
import "./Body_n.css"
import SongRow_n from './SongRow_n';
import Divider from '@material-ui/core/Divider';
let addr = "http://127.0.0.1:8080/src/music/";
const Body = ({songlist ,songQueue , removeFromQueue }) => {
    let list = []
    for(let u = 0 ; u < songQueue.length ; u++)
    {
        list.push(songlist[songQueue[u]]);
    }
    const[song,setSong] = useState([
        {
            title:"Sick Boy"
            , artist: "The Chainsmokers"
            , img_src: "https://wallpapercave.com/wp/wp4772665.jpg"
            , src: `${addr}Sick_Boy`
        }
    ]);
    console.log(songlist[songQueue[0]].img_src);
    return (
        <div className="_body_n">
            <div className="curr_song_img">
                <img src ={songlist[songQueue[0]].img_src} />
            </div>
            <div className="_queue"> 
            <div>
            <div className="queue_heading_div">
                 <div className="queue_heading"><h4>UP NEXT</h4></div>
                 <div className="queue_heading"><h4>LYRICS</h4></div>
                 
            </div>
            <Divider className="_body_n_divider" orientation="horizontal" color="white" />
            </div>
            <div className="_song_queue">
            {
                list.map((item,index) => 
                    <SongRow_n key={index} index={songQueue[index]} songs={item} removeFromQueue={removeFromQueue}  />
                    
                )
            }
            </div>
            </div>
        </div>
    )
}

export default Body;