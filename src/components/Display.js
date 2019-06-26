import React from "react"
import {MyContext} from "../context"


class Display extends React.Component{
   constructor(props){
     super(props)
     this.minsRef = React.createRef()
     this.secsRef = React.createRef()
   }
  changeSession=(elem)=>{
    elem.current.setAttribute("type","number")
    elem.current.removeAttribute("value")

  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.minsRef.current.setAttribute("type","button");
    this.secsRef.current.setAttribute("type","button");
  }
  render(){
    return (
      <MyContext.Consumer>
        {({currentTime,session,changeSession})=>{
          let secs = currentTime-Math.floor(currentTime/60)*60
          let mins = currentTime? Math.floor(currentTime/60):session
          return <form onSubmit={this.onSubmit}>
                  <input ref={this.minsRef}
                        type="button"
                        onClick={()=>this.changeSession(this.minsRef)}

                        value={`${mins}`}/>
                      <input ref={this.secsRef}
                         type="button"
                         onClick={()=>this.changeSession(this.secsRef)}

                         value={`${secs>=10?secs:"0"+secs}`}/>
                       <input type="submit"/>
                </form>
        }}
      </MyContext.Consumer>
    )
  }
}

export default Display
