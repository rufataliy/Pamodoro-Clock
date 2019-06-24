import React from "react"

export const MyContext = React.createContext()

export class MyProvider extends React.Component{
  constructor(props){
    super(props)
    // this.handleTimer= this.handleTimer.bind(this)
    // // this.stopTimer= this.stopTimer.bind(this)
  }
  state = {
    session:0,
    secs:0,
    currentTime:0,
    intervalId:0,
    running:false
  }
  sessionChange= (direction)=>{
    if (direction==="up") {
      this.setState({session:this.state.session+1});
    }
    else if(direction==="down") {
      if (this.state.session!==0) {
        this.setState({session:this.state.session-1});
      }
    }
  }

  startTimer=()=>{
    let secs = this.state.session*60
    let timer = setInterval(()=>{
    if (secs!==0) {
      secs--
      this.setState({currentTime:secs})
      const disMins = Math.floor(secs/60)
      const disSecs = secs-Math.floor(secs/60)*60
      if (disSecs<10) {
        console.log(disMins,"0"+disSecs);
      } else{
        console.log(disMins,disSecs);
      }
    }
  },1000)
  this.setState({intervalId:timer,currentTime:secs})
  }
  stopTimer = ()=>{
    clearInterval(this.state.intervalId)
    this.setState({currentTime:0,intervalId:undefined})
  }
  render(){
    console.log(this.state.intervalId);
    return(
      <MyContext.Provider value={{...this.state,
                                  changeSession:this.sessionChange,
                                  startTimer:this.startTimer,
                                  stopTimer:this.stopTimer
                                }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
