import React from "react"
import {MyContext} from "../context"

const Controles =() =>{
    return(
      <div>
        <MyContext.Consumer>
          {(context)=>{
            return(
                <div className="flex">
                  <button onClick={()=>context.startTimer()}><i className="fas fa-play"></i></button>
                  <button onClick={()=>context.pauseTimer()}><i className="fas fa-pause"></i></button>
                  <button onClick={()=>context.stopTimer()}><i className="fas fa-stop"></i></button>
                </div>
            )
          }}
        </MyContext.Consumer>
      </div>
    )
}

export default Controles
