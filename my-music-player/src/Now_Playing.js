import React from 'react'
import Top_bar from './Top_bar'
import "./Now_playing.css"
import Body_n from "./Now_playing_components/Body_n"
import Footer_n from './Now_playing_components/Footer_n'
const Now_playing = ({songlist, change ,songQueue , removeFromQueue }) => {

    return (
        <div className="_nowPlaying">
            <Top_bar change={change} />
            <Body_n songlist={songlist} songQueue={songQueue} removeFromQueue={removeFromQueue} />
            <Footer_n song={songlist[songQueue[0]]}/>
        </div>
    )

}

export default Now_playing;