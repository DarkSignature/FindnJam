import "../playlist.css"
import Playlist from "./Playlist";

const SavedPlaylist = ({savedRef, playList, setPlayList, playList1, setPlayList1, playList2, setPlayList2, playList3, setPlayList3}) => {
    return (
      <div className="saved-box " ref={savedRef}>
        <div className="saved-title">
          <p className="">Saved Playlist</p>
        </div>
        <div className="saved-contentbox">
          <div className="saved-content1 saved-content">
            <p>Playlist 1</p>
              <p className="playlist-content">{playList1.length === 0 ? "You haven't saved any song to this playlist" : playList1.map((song, index) => (
               <div className="item-playlist">
                  <p className="mb-2">{index + 1}. {song.title}</p>

               </div>
              ))}</p>
              <p>{playList1.length === 0 ? "" : <div><button className="playButton button" onClick={() => {
                setPlayList([...playList1]); 
                console.log(playList);
              }}>Play</button>
              <button className="delButton button" onClick={() => {
                setPlayList1([]);
              }}>Delete</button></div>}</p>
          </div>
          <div className="saved-content2 saved-content">
            <p>Playlist 2</p>
            <p className="playlist-content">{playList2.length === 0 ? "You haven't saved any song to this playlist" : playList2.map((song, index) => (
               <div className="item-playlist">
                  <p className="mb-2">{index + 1}. {song.title}</p>
               </div>
              ))}</p>
              <p>{playList2.length === 0 ? "" : <div><button className="playButton button" onClick={() => {
                setPlayList([...playList2]); 
                console.log(playList);
              }}>Play</button>
              <button className="delButton button" onClick={() => {
                setPlayList2([]);
              }}>Delete</button></div>}</p>
          </div>
          <div className="saved-content3 saved-content">
            <p>Playlist 3</p>
            <p className="playlist-content">{playList3.length === 0 ? "You haven't saved any song to this playlist" : playList3.map((song, index) => (
               <div className="item-playlist">
                  <p className="mb-2">{index + 1}. {song.title}</p>
               </div>
              ))}</p>
              <p>{playList3.length === 0 ? "" : <div><button className="playButton button" onClick={() => {
                setPlayList([...playList3]); 
                console.log(playList);
              }}>Play</button>
              <button className="delButton button" onClick={() => {
                setPlayList3([]);
              }}>Delete</button></div>}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SavedPlaylist;
  