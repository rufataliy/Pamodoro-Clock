import React from "react"
import Controles from "./controles"
import Display from "./Display"
import {MyProvider} from "../context.js"
import "../app.css"


class App extends React.Component{
  render(){
    return (
      <div className="wrapper">
        <MyProvider>
          <div>
            <Controles/>
            <Display/>
          </div>
        </MyProvider>
      </div>
    )
  }
}

export default App
