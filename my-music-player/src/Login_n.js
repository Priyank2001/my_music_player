import React,{ useState } from 'react';
import "./Login_n.css"
import Home_page from "./Home_page"
// fs module : writeFile is defined
// writeFile(path,data,callback)
const fs = require('fs');

class user{
    constructor(name, _userId , _userPassword){
        this.name = name;
        this.username = _userId;
        this.password = _userPassword;
    }
}

let users = [];

///////////////////////////////////////////////////////////////////////
function intialise(){
    fs.readFile('http://127.0.0.1:8080/src/users.txt', (err, data) => {
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





function Login_n(){
    const [already_user,setUserStatus] = useState(true);
    const [intialise_state,setIntialiseState] = useState(true);
    const [wrong_username,setWrongUserId] = useState(false);
    const [logged_in,set_logged_in] = useState(false);
    intialise();
    //csetIntialiseState(false);
    return already_user?(
    logged_in && !wrong_username ?<Home_page /> :  
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
export default Login_n;