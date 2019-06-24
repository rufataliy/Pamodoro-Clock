var mins = 5
var secs = mins*60
var disMins;

function countDown(){
  disMins = Math.floor(secs/60)
  disSecs = secs-Math.floor(secs/60)*60
  secs--
  if (disSecs<10) {
    console.log(disMins,"0"+disSecs);
  }else{
    console.log(disMins,disSecs);
  }
}

function timer(){
      window.setInterval(countDown,1000)
}
