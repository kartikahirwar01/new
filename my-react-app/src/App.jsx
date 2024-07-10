import React, { useState } from 'react'
import './App.css'
const App = () => {
  let [count ,SetCount]=useState(0)
  let  [time , SetTime] =useState()
  function fun1(){
    SetCount(++count)
  }
  setInterval(()=>{
    let date=new Date().toLocaleTimeString()
    SetTime(date)
  })

  return (
    <div>
      <p>{count}</p>
      <button onClick={fun1}>add</button>


      <p>Time : {time}</p>
    </div>
  )
}

export default App
