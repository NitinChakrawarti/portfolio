import React, {useState} from 'react'
import Home from './home';


const Login = (props) => {
   const [contact, setContact]= useState({
    fname:"",
    lname:"",
   })

   function inputChange(event){ 
      const {name, value} =event.target ;
      setContact(prevValue=>{
        return {
          ...prevValue,
          [name] :value,

        }

      })
    }

    let bool= false;
    const checkBool = ()=>{
      return (contact.fname === contact.lname ? bool =true : bool = false) ;
      
    }

    function Homep(){
      props.setStat(checkBool);

      }
 

    return (
     <>
     <div className="head">
              <h1>Log In</h1>
          </div>
          <div className="body">
              <h3>UserName</h3>
              <input type="text"  name="fname" placeholder='enter User name' onChange={inputChange} value={contact.fname}/>
              <h3>PassWord</h3>
              <input type="password" name="lname" placeholder='enter password ' onChange={inputChange} value={contact.lname}/> 
          </div>
          <button className="submit" onClick={Homep} >Submit</button>
          
     </>
    )
  }
   

export default Login;
