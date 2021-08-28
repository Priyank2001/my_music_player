import React,{ useState } from 'react';
import "./Login.css"
import Home_page from "./Home_page"
import Player_copy from "./Player_copy"
import Player from "./Player"
// fs module : writeFile is defined
// writeFile(path,data,callback)
import * as fs from 'fs'
//const fs = require('fs');

class user{
    constructor(name, _userId , _userPassword){
        this.name = name;
        this.username = _userId;
        this.password = _userPassword;
    }
}



let users = [];
///////////////////////////////////////////////////////////////////////
 let addr = "http://127.0.0.1:8080//src/music/";





///////////////////////////////////////////////////////////////////////
function intialise(){
    fs.readFile('http://127.0.0.1:8080//srcusers.txt', (err, data) => {
    if (err) throw err;
  	console.clear();
    let arr = data.toString().split("\n");
	arr.map((item) => {
        let t = item.split(" ");
        let temp_user = new user(t[0],t[1],t[2]);
       	users.push(temp_user);
    }
    )
    return ;
});
}


///////////////////////////////////////////////////////////////////////
function search_user(A)
{
    let i = 0;
    for(i = 0 ; i < users.length ; i++)
        {
            if(users[i].username == A)
                return users[i];
        }
    return null;
}





function Login(props){
  /*
    const [songs , setSongs] = useState(
    [
      {
        title: "Sick Boy"
        , artist: "The Chainsmokers"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/616yc9rzUOL._AC_SX466_.jpg"
        , src: `${addr}Sick_Boy`,
        ID : 1
      },
      {
        title: "Starboy"
        , artist: "The Weeknd"
        , img_src: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
        , src: `${addr}Starboy`,
        ID : 2
      },
      {
        title: "First Time"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}First_Time`,
        ID : 3
      }
      ,
      {
        title: "All Time Low"
        , artist: "Jon Bellion"
        , img_src: "https://yt3.ggpht.com/ytc/AAUvwnh1KvrMkUKqJKtX_eX7D7RkhmO3XfWCMzYKOg4hXQ=s900-c-k-c0x00ffffff-no-rj"
        , src: `${addr}All_Time_Low`,
        ID : 4
      }
      ,
      {
        title: "You are the Best Thing About Me"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}You_are_the_Best_Thing_About_Me`,
        ID : 5
      }
      ,
      {
        title: "It Ain't Me"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}It_Ain't_Me`,
        ID : 6
      }
      ,
      {
        title: "This Town"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}This_Town`,
        ID : 7
      }
      ,
      {
        title: "Stargazing"
        , artist: "Kygo"
        , img_src: "https://images-na.ssl-images-amazon.com/images/I/81BVSz9PqML._AC_UL600_SR600,600_.jpg"
        , src: `${addr}Stargazing`,
        ID : 8
      }
      ,
      {
        title: "Where Are You Now"
        , artist: "Skrillex,Diplo and Jack Ü"
        , img_src: "https://static.wikia.nocookie.net/justin-bieber/images/f/f6/Skrillex_and_Diplo_Present_Jack_%C3%9C.jpg"
        , src: `${addr}Stargazing`,
        ID: 9
      }
      ,
    ]

  );
*/


    const [already_user,setUserStatus] = useState(true);
    const [intialise_state,setIntialiseState] = useState(true);
    const [wrong_username,setWrongUserId] = useState(false);
    const [logged_in,set_logged_in] = useState(true);
    //intialise();
    //csetIntialiseState(false);
    //console.log(props);
    //return <div>Hello World</div>;
    return already_user?(
     logged_in && !wrong_username ? <Player_copy list={props.list}/> :  
    (<div className = "_login">
            <div>
            	<div className="info_query">
            	<h4>Username:</h4>
            	<input id="_username_input" type="text" ></input>
            	</div>
            	<div className="info_query">
            	<h4>Password:</h4>
            	<input id="_password_input" type="password" ></input>
           	    </div>
                {wrong_username? (<div className="_wrong_username"> Wrong username</div>):(<div></div>) }
            </div>
            <div className="_login_button_div">
                <a href="#" onClick={
                        () => {
                           let x = document.getElementById("_username_input");
                           let y = document.getElementById("_password_input");
                           set_logged_in(true);
                     	   if(search_user(x.value) == null)
                               {
                                   setWrongUserId(true);
                               }
                           else
                              {
                                  console.log(search_user(x.value));
                                  set_logged_in(true);
                                  setWrongUserId(false);
                              }
                        }
                    }>Login</a>
            </div>
            <div className="_newId_link">
                <a onClick={
                        	() => 
                            {
                                setUserStatus(false);
                            }
                           } >
                	Create a new id
                </a>
            </div>
     </div>)
    )
    :
    (
        <div className="_createId">
            <div>
                	<div className="_createId_queries">
                        <h4>Name</h4>
            			<input id="_new_name" placeholder="Enter your name"></input> 
            		</div>
            		<div className="_createId_queries">
                        <h4>Username</h4>
            			<input id="_new_username" placeholder="Enter your Username"></input> 
            		</div>
                	<div className="_createId_queries">
                        <h4>Password</h4>
            			<input id="_new_password" type="password" placeholder="Enter your Password"></input> 
            		</div>    
                	<a onClick={()=> {
                        
                        var newName = document.getElementById("_new_name").value;
                        var newUsername = document.getElementById("_new_username").value;
                        var newPassword = document.getElementById("_new_password").value;
                        var newUser = new user(newName,newUsername,newPassword);
                        users.push(newUser);
                        //fs.writePath('users.txt',users,(err => {
                        //             if(err) throw err
                        //             }));
						setUserStatus(true);
                    }}> submit </a>
            </div>
        </div>
    );
}
export default Login;