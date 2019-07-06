import React from "react"
import {MyContext} from "../context"
import Sound from "./Sound"


class Display extends React.Component{
  state = {
    isEditing: false
  }
  changeShadowRed=()=>{
    document.documentElement.style.setProperty('--shadow',"#fb043d");
    document.querySelector("body").style.backgroundColor = "#ad3f65"
  }
  changeShadowBlue=()=>{
    document.documentElement.style.setProperty('--shadow',"deepskyblue");
    document.querySelector("body").style.backgroundColor = "#3b676d"
  }
  render(){
    return (
      <MyContext.Consumer>
        {({
          sessionTimer,
          running,
          onChangeMinutesInput,
          onChangeSecondsInput,
          toggleEditing,
          editing,
          completed,
          onSoundComplete
        }) => {
          const { minutes, seconds } = sessionTimer
          return <div>
                  {!editing &&
                    [
                      <div className={seconds <= 10 && minutes == 0 && running ? this.changeShadowRed() : this.changeShadowBlue()}>
                        <div className="flex">
                          <input
                            className="digits"
                            type="button"
                            onClick={toggleEditing}
                            value={minutes}/>

                          <input
                            className="digits"
                            type="button"
                            onClick={toggleEditing}
                            value={seconds}/>
                        </div>
                       {completed===true &&
                         <Sound onSoundComplete={onSoundComplete}/>
                       }
                      </div>
                   ]
                  }
                  {editing && !running &&
                    [
                      <div className="flex">
                        <input
                          className="editing digits"
                          type="text"
                          onChange={onChangeMinutesInput}
                          value={minutes}/>,

                        <input
                          className="editing digits"
                          type="text"
                          onChange={onChangeSecondsInput}
                          value={seconds}/>
                      </div>
                    ]
                  }
                  <input
                    className="submit"
                    type="button"
                    value="SET"
                    onClick={toggleEditing}/>
                </div>
        }}
      </MyContext.Consumer>
    )
  }
}

export default Display
