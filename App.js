import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
// import Login from './Login'
import Counter from './Counter'
import Registration from './Registration'
export default function App(){
  const [enableCounter,setCounter]=useState(false)
  
  if(enableCounter){
    return<Counter></Counter>
  }
  else{
    return <Registration></Registration>
  }
  // return(
  //   <div>
  //     <h1>
  //       Home
  //     </h1>
  //     <Link to="/Login">Login</Link><br></br>
  //   </div>
  // )
}