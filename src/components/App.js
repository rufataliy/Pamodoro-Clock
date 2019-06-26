import React from "react"
import Controles from "./controles"
import Display from "./Display"
import {MyProvider, MyContext} from "../context.js"


class App extends React.Component{
  render(){
    return (
      <MyProvider>
        <div>App
          <Controles/>
          <Display/>
        </div>
      </MyProvider>
    )
  }
}

export default App
