import React from 'react'
import "./Audio.css"



function Audio({curr,state}) {
    return (
        <div className="_audio_tag"> 
            <audio controls >
                {/* <source src="http://streaming.tdiradio.com:8000/house.mp3" /> */}
                {console.log(`http://127.0.0.1:8080/src/music/${curr}.mp3`)}
                <source src={`http://127.0.0.1:8080/src/music/${curr}.mp3`} />
            </audio>
        </div>
    )
}

export default Audio
