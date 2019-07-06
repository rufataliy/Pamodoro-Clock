import React from "react"

export const MyContext = React.createContext()

export class MyProvider extends React.Component{
  state = {
    sessionTimer: {
      minutes: 0,
      seconds: 0
    },
    intervalId: undefined,
    running: false,
    editing: false,
    completed:undefined
  }
  toggleEditing=()=>{
    if (this.state.running) {
      return
    }
    this.setState({editing:!this.state.editing})
  }
  startTimer = () => {
    const {minutes,seconds} = this.state.sessionTimer
    if (this.state.running || this.state.editing || (minutes ==0 && seconds ==0)) {return}
      const timerId = setInterval(() => {
      const { sessionTimer } = this.state
      const { minutes, seconds } = sessionTimer
      if(seconds == 0 && minutes == 0) {
        this.setState({ running: false,completed:true })
        this.stopTimer()
      } else {
        if(seconds == 0) {
          const timer = {
            minutes: minutes - 1,
            seconds: 59
          }
          this.setState({ sessionTimer: timer })
        } else {
            this.setState({
              sessionTimer: {
                minutes,
                seconds: seconds - 1
              }})
        }
      }
    }, 1000)
    this.setState({ intervalId: timerId, running: true })

  }

  pauseTimer = () => {
    if (this.state.running) {
      clearInterval(this.state.intervalId)
      this.setState({ running: false })
    }
  }

  stopTimer = ()=>{
    if (this.state.editing) {
      return;
    }
    clearInterval(this.state.intervalId)
    const newState = {
      sessionTimer: {
        minutes: 0,
        seconds: 0
      },
      running: false,
      intervalId: undefined
    }
    this.setState(newState)
  }

  onChangeMinutesInput = (event) => {
      const newMinutes = event.target.value;
      if(newMinutes < 0) return;
      const { sessionTimer } = this.state
      this.setState({ sessionTimer: { ...sessionTimer, minutes: newMinutes } })
  }

  onChangeSecondsInput = (event) => {
    const newSeconds = event.target.value;
    if(newSeconds < 0 || newSeconds >= 60) return;
    const { sessionTimer } = this.state
    this.setState({ sessionTimer: { ...sessionTimer, seconds:newSeconds } })
  }
  onSoundComplete = ()=>{
    this.setState({completed:undefined})
  }
  render(){
    return(
      <MyContext.Provider value={{...this.state,
                                  //changeSession:this.sessionChange,
                                  startTimer:this.startTimer,
                                  pauseTimer:this.pauseTimer,
                                  stopTimer:this.stopTimer,
                                  onChangeMinutesInput: this.onChangeMinutesInput,
                                  onChangeSecondsInput: this.onChangeSecondsInput,
                                  toggleEditing:this.toggleEditing,
                                  onSoundComplete:this.onSoundComplete
                                }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
