import React from "react"
import {MyContext} from "../context"

const Controles =() =>{
    return(
      <div>
        <MyContext.Consumer>
          {(context)=>{
            return(
              <React.Fragment>
                <button onClick={()=>context.changeSession("up")}>up</button>
                <button onClick={()=>context.changeSession("down")}>down</button>
                <button onClick={()=>context.startTimer()}>&#9658;</button>
                <button onClick={()=>context.pauseTimer()}>II</button>
                <button onClick={()=>context.stopTimer()}>&#9632;</button>
              </React.Fragment>
            )
          }}
        </MyContext.Consumer>
      </div>
    )
}

export default Controles
