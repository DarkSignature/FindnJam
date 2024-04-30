import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';
import {useRef, useState, useEffect} from 'react';
import '../index.css'
import { FaMinus } from "react-icons/fa";

const Musicplayer = ({ nextSong, isPlaying, setisPlaying, songChoice, audioRef, songs, setSongs, setSongChoice, playRef, isHidden, onClick, playList}) => {
    const playButton = () => {
        setisPlaying(!isPlaying);
    }

    const [currentTime, setCurrentTime] = useState(0);
    const clickRef = useRef();

    const checkWidth = (e) => {
        console.log(e.nativeEvent);
        console.log("Progress" + songChoice.progress);
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divprogress = offset/width * 100;
        audioRef.current.currentTime = divprogress/100 * songChoice.length;
        setCurrentTime(audioRef.current.currentTime);
    }


  const prevSong = () => {
    const songIndex = playList.findIndex(x => x.title === songChoice.title);

    if(songIndex == 0){
      setSongChoice(playList[playList.length - 1]);
    }
    else{
      setSongChoice(playList[songIndex - 1]);
    }

    audioRef.current.currentTime = 0;
    setCurrentTime(audioRef.current.currentTime);
  }

  return (
    <div className="play-container" ref={playRef}>
      <FaMinus className="miniBtn" onClick={onClick}/>
        <div className="play-title">
            <p>{songs.length === 0 ? 'Empty Playlist'  : songChoice.title}</p>
        </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${songChoice.progress+"%"}`}}></div>
        </div>
      </div>
      <div className="controls flex flex-row">
        <BsFillSkipStartCircleFill className="controls_button" onClick={prevSong}/>
        {isPlaying ? <BsFillPauseCircleFill className="controls_button" onClick={playButton}/> : <BsFillPlayCircleFill className="controls_button" onClick={playButton}/>}
        <BsFillSkipEndCircleFill className="controls_button" onClick={nextSong}/>
      </div>
    </div>
  )
}

export default Musicplayer
