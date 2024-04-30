import Musicplayer from "./Musicplayer";
import { useRef, useState, useEffect } from 'react'
import { songList } from './audio'
import { SiApplemusic } from "react-icons/si";
import Playlist from "./Playlist";

const Player = ({songChoice, setSongChoice, songs, setSongs, isPlaying, setisPlaying, userSongs, setUserSongs, playList, setPlayList}) => {
    const audioRef = useRef();
    const [isHidden, setisHidden] = useState(true);
    const playRef = useRef();
    
    useEffect(() => {
      if (userSongs.length > 0) {
        setPlayList(userSongs);
        setSongChoice(userSongs[0]); 
        console.log("User LIST");
      } else {
        setPlayList(songList);
        setSongChoice(songList[0]);
        console.log("STANDARD LIST");
      }
      let i = 0;
      playList.forEach(item => {
        console.log("PLAYLIST: " + i + " " + item.title + "\n" + item.url);
        i++;
      });
      const songIndex = playList.findIndex(x => x.title === songChoice.title);
      console.log("CURRENT SONG: " + songIndex);
    }, [userSongs]);
    
    useEffect(() => {
      if(isPlaying){
        audioRef.current.volume = 0.02;
        audioRef.current.play();
      }
      else{
        audioRef.current.pause();
      }
    }, [isPlaying, songChoice])


    
    const onPlaying = () => {
      const duration = audioRef.current.duration;
      const ct = audioRef.current.currentTime;  
      setSongChoice({ ...songChoice, "progress": ct / duration * 100, "length": duration })
    
    }
  
    const nextSong = () => {
      const songIndex = playList.findIndex(x => x.title === songChoice.title);

      if(songIndex == playList.length - 1){
        setSongChoice(playList[0]);
      }
      else{
        setSongChoice(playList[songIndex + 1]);
      }
      audioRef.current.currentTime = 0;
      console.log("CURRENT SONG: " + songIndex);
    }

    useEffect(() => {
      setSongChoice(playList[0]);
      // nextSong();
    }, [playList, setPlayList])

    const hidePlayer = () => {
      console.log(playRef.current.classList);
      playRef.current.classList.toggle("hide-container");
      setisHidden(!isHidden);
      console.log(isHidden);
      console.log(playRef.current.classList);
    }
  
    return (
      <div className="App">
        <audio src={playList.length === 0 ? "\"\"" : songChoice.url} ref={audioRef} onTimeUpdate={onPlaying} onEnded={nextSong}>
        </audio>
        { !isHidden && <SiApplemusic className="hidden-icon" onClick={hidePlayer}/>}
        <Musicplayer nextSong={nextSong} isPlaying={isPlaying} setisPlaying={setisPlaying} songChoice={songChoice} audioRef={audioRef} songs={songs} setSongs={setSongs} setSongChoice={setSongChoice} playRef={playRef} isHidden={isHidden} onClick={hidePlayer} playList={playList}/>
      </div>
    );
}

export default Player
