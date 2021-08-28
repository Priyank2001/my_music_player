import React from 'react'
import "./Body.css"
import Header from "./Header"
import SongRow from "./SongRow"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
let x = 0;

export function val(){
    console.log(x);
 return x;
}

function Body({songlist , curr}){
    let a = false;
    return (
    <div className="__body">
        <Header />
        <div className="_body_songs">
        {songlist.map((item,i) => <div>
            <a onClick={() => {x = i;val();}} >
            <SongRow key={curr} title={item.title} photo={item.img_src} artist={item.artist} index={curr} />
            </a>
            <div>
                <a href = "" onClick={() => {
                    a = !a;
                }}>
                    {a ? (<div><FavoriteIcon /></div>) : (<div><FavoriteBorderIcon /></div>)}
                    </a>
                </div>
            </div>
            )}
        </div>
    </div>
    );
}

export default Body;