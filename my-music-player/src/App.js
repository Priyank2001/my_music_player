import { useState } from 'react';
import Auth from './Auth'
import './App.css';

import Login from "./Login"; 
/*
 
 class Song{
  constructor(Title,Artist,Img, Src,id,fav){
    this.title = Title;
    this.artist = Artist;
    this.img_src = Img;
    this.src = Src;
    this.ID =id;
    this.is_fav = fav; 
  }
}
*/
let addr = "http://127.0.0.1:8080/src/music/";
function App() {
  let curr = 0;
  
  const [songs , setSongs] = useState(
    [
      {
        title: "Sick Boy"
        , artist: "The Chainsmokers"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/616yc9rzUOL._AC_SX466_.jpg"
        , src: `${addr}Sick_Boy`
      },
      {
        title: "Starboy"
        , artist: "The Weeknd"
        , img_src: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
        , src: `${addr}Starboy`
      },
      {
        title: "First Time"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}First_Time`
      }
      ,
      {
        title: "All Time Low"
        , artist: "Jon Bellion"
        , img_src: "https://yt3.ggpht.com/ytc/AAUvwnh1KvrMkUKqJKtX_eX7D7RkhmO3XfWCMzYKOg4hXQ=s900-c-k-c0x00ffffff-no-rj"
        , src: `${addr}All_Time_Low`
      }
      ,
      {
        title: "You are the Best Thing About Me"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}You_are_the_Best_Thing_About_Me`
      }
      ,
      {
        title: "It Ain't Me"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}It_Ain't_Me`
      }
      ,
      {
        title: "This Town"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}This_Town`
      }
      ,
      {
        title: "Stargazing"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}Stargazing`
      }
      ,
      {
        title: "Where Are You Now"
        , artist: "Skrillex,Diplo and Jack Ü"
        , img_src: "https://static.wikia.nocookie.net/justin-bieber/images/f/f6/Skrillex_and_Diplo_Present_Jack_%C3%9C.jpg"
        , src: `${addr}Stargazing`
      }
      ,
    ]

  )
  
  /*
  let arr = [];
  arr.push(new Song("Sick Boy","The Chainsmokers","https://images-na.ssl-images-amazon.com/images/I/616yc9rzUOL._AC_SX466_.jpg",`${addr}Sick_Boy`,1,false));
  arr.push(new Song("Starboy","The Weeknd","https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",`${addr}Starboy`,2,true));
  arr.push(new Song("First Time", "Kygo","https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg",`${addr}First_Time`, 3,false));
  arr.push(new Song("All Time Low","Jon Bellion", "https://yt3.ggpht.com/ytc/AAUvwnh1KvrMkUKqJKtX_eX7D7RkhmO3XfWCMzYKOg4hXQ=s900-c-k-c0x00ffffff-no-rj",`${addr}All_Time_Low`,4,false));
  arr.push(new Song("You are the Best Thing About Me", "Kygo","https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg",`${addr}You_are_the_Best_Thing_About_Me`,5,false));
  const[songs,setSongs] = useState(arr);
  */
   var elem = 
     (<div className="App">
      <Login list={songs} />
      {/* <Login_n /> */}
      {/* <Auth /> */}
      </div>)
    ;
  return elem;
  

}

//ReactDOM.render(
//  <Player />,
//  document.getElementById("root"));
export default App;
