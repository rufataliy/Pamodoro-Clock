import React from "react"
import soundFile from "../assets/alarm.mp3"
import Sound from "react-sound"


export default class Alarm extends React.Component {
  handleSongFinishedPlaying=()=>{
    this.props.onSoundComplete()
  }
  render (){
    return(
      <Sound
        ref="sound"
        url={soundFile}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        loop={false}
        />
    )
  }
}

//
// const Sound = () => {
//   const soundRef = React.createRef()
//   return (
//     <div>
//       <audio ref={soundRef} src="../assets/alarm.mp3" controls autoPlay/>
//     </div>
//   )
// }
//
// export default Sound
