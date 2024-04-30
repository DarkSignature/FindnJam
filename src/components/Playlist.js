import "../playlist.css"
import {FaTimes, FaMinus} from 'react-icons/fa'

const Playlist = ({playList, setPlayList, userSongs, setUserSongs, listRef, showList, playList1, setPlayList1, playList2, setPlayList2, playList3, setPlayList3}) => {
  return (
    <div className="hide-playlist" ref={listRef}>
      <div className="your-playlist"><p>Your Playlist!<button className="close-playlist" onClick={showList}><FaMinus/></button></p></div>
      <div className="container overflow-auto flex flex-wrap">
      <div className="playlist">
        <p className="playlist-contents">{userSongs.length === 0 ? "You haven't added any song to the playlist" : playList.map((song, index) => (
            <div className="item-playlist">
                <p className="mb-2">{index + 1}. {song.title}<button className="relative left-4 text-lg mt-1 text-red-600 " onClick={() => {
                  const updatedUserSongs = userSongs.filter((song, i) => i !== index);
                  setUserSongs(updatedUserSongs);
                }}><FaTimes/></button></p>
                
            </div>
        ))}</p>
        <p>{userSongs.length === 0 ? " " : <button className="saveButton" onClick={() => {
          if(playList1.length === 0){
            setPlayList1([...playList]);
          }
          else if(playList2.length === 0){
            setPlayList2([...playList]);
          }
          else if(playList3.length === 0){
            setPlayList3([...playList]);
          }
        }}>Save Playlist</button>}</p>
        <p className="mb-2 font-semibold">{playList1.length === 0 || playList2.length === 0 || playList3.length === 0 ? "" : "No empty saves available!" }</p>
      </div>
      </div>
    </div>
  )
}

export default Playlist
