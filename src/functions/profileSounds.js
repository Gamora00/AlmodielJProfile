import umaasa from '../style/music/umaasa.mp3'
import shakeItOff from '../style/music/shakeIt.mp3'
import twenty from '../style/music/2012.mp3'
import Better from '../style/music/Better.mp3'
function profileSounds({picture}) {
  let pointing
  let Interacted = true

 
 
  pointing = new Audio(umaasa)
  pointing.loop = false
  pointing.currentTime = 2


  const inMouse = () => {
    if (Interacted) {
      pointing.play().then(() => {
        console.log("bro");
      }).catch((e) => {
        console.log(e);
      });
    }
  }

  const dbclick = ()=>{
    let music = [twenty,shakeItOff,Better,umaasa]  
    let randomMusic = Math.floor(Math.random() * music.length )
    console.log("dbClick");
    pointing.pause()
    pointing = new Audio(music[randomMusic])
    pointing.play()
  }

  const outMouse = () => {
    setTimeout(() => {
      console.log("dputa");
      pointing.pause()
      pointing.currentTime = 2
    })
  }



  return (
    <div className="profile">
            <img src={picture} onMouseOver={inMouse} onMouseOut={outMouse} onDoubleClick={dbclick} allow="autoplay"/>
    </div>
  )
}

export default profileSounds