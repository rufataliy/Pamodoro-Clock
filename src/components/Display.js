import React from "react"
import {MyContext} from "../context"


class Display extends React.Component{
  render(){
    return (
      <MyContext.Consumer>
        {({currentTime,session})=>{
          let secs = currentTime-Math.floor(currentTime/60)*60
          let mins = currentTime? Math.floor(currentTime/60):session
          return <h1>{`${mins}:${secs>=10?secs:"0"+secs}`}</h1>
        }}
      </MyContext.Consumer>
    )
  }
}

export default Display
