import Picture from './Picture'
import "../index.css"
import "../music.css"
import { useState } from 'react'
import { songList, userSongList } from './audio'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Body = ({filteredSongs , filterSongs, selectedFilter, buttonRef, contentRef, buttonName, onClick, setSongChoice, songs, isPlaying, setisPlaying, userSongs, setUserSongs, playList, songChoice, bodyContentRef, bodyColorRef,  contentColorRef, selectRef}) => {

  const [hoverIndex, setHoverIndex] = useState(null);
  
  return (
    <div ref={bodyColorRef} className="body-container border-solid border-4 border-black">
        <button ref={buttonRef} className="flex items-center justify-center w-8 h-8 border-gray-300 z-1000 standard_button rounded-full" onClick={onClick}>{buttonName === "Dark Mode" ? <MdDarkMode />: <MdLightMode />}</button>
        <div ref={bodyContentRef} className="w-full h-auto flex flex-col items-center justify-center relative p-4 border-solid border-4 border-black body-content-color">
          <div className=" w-full items-center flex align-center justify-center flex-column">
            <p className="font-bold text-3xl mb-4 find-title">Find Your Music!</p>
            
          </div>
          {/* <button className="bg-yellow-400 text-white rounded-lg w-20 border-2 border-solid font-semibold relative top-0 right-100 mb-4">Filter</button> */}
          <select ref={selectRef} className="selectBtn pl-2 pr-2 pt-1 pb-1 rounded-lg min-w-24 max-w-fit border-2 border-solid font-semibold relative top-0 right-100 mb-4" onChange={(e) => filterSongs(e.target.value)}>
          <option className="text-center" value="all">All</option>
          <option className="text-center" value="Persona 3">Persona 3</option>
          <option className="text-center" value="Persona 4">Persona 4</option>
          <option className="text-center" value="Persona 5">Persona 5</option>
          <option className="text-center" value="Trails of Cold Steel">Trails of Cold Steel</option>
          <option className="text-center" value="Trails into Reverie">Trails into Reverie</option>
          </select>
      
          <div className="flex flex-row gap-3 flex-wrap items-center justify-center">
          {selectedFilter === "all"
          ? songList.map((song, index) => (
          <div ref={contentColorRef} className={buttonName === "Dark Mode" ? "content-color w-60 h-72 flex flex-wrap items-center justify-center relative flex-col border-2 border-solid border-black" : "dark_content_color w-60 h-72 flex flex-wrap items-center justify-center relative flex-col border-2 border-solid border-black"} 
          key = {index}
          onMouseEnter={e => {
            setHoverIndex(index);
          }}
          onMouseLeave={e => {
            setHoverIndex(null);
          }}>
            <div className="bg-black/50 w-full h-full text-center absolute top-0 left-0 z-10" style={{display: hoverIndex === index ? 'block' : 'none'}}>
              <button className="relative left-16 top-40 bg-lime-500 p-3 border rounded-lg hover:bg-green-600" onClick={() => {
                setSongChoice(songs[index]);
                setisPlaying(true);
              }}>Play Song</button>
              <button className="relative right-12 top-20 bg-red-500 p-3 border rounded-lg hover:bg-red-600" onClick={() => {
                let songIndex = -1;
                userSongs.forEach((item) => {
                  if(item.title === song.title){
                    songIndex = 1;
                  }
                });
                if(songIndex === -1){
                setUserSongs([...userSongs, { title: song.title, url: song.url }]);
              }
              }}>Add to Playlist</button>
            </div>
            <div className="w-24 h-28 bg-white absolute top-8">
              <img src={song.img} className="border-black border-2" alt={song.filter}></img>
            </div>
            <div className="relative top-24 p-2 items-center text-center w-30 h-26">
              <p className="font-semibold">{song.title}</p>
              <p className="font-light">{song.filter}</p>
            </div>
          </div>
          ))
          : filteredSongs.map((song, index) => (
            <div className="bg-lime-500 w-60 h-72 flex flex-wrap items-center justify-center relative flex-col border-2 border-solid border-black" 
            key = {index}
            onMouseEnter={e => {
              setHoverIndex(index);
            }}
            onMouseLeave={e => {
              setHoverIndex(null);
            }}>
              <div className="bg-black/50 w-full h-full text-center absolute top-0 left-0 z-10" style={{display: hoverIndex === index ? 'block' : 'none'}}>
                <button className="relative left-16 top-40 bg-lime-500 p-3 border rounded-lg hover:bg-green-600" onClick={() => {
                  setSongChoice(songs[index]);
                  setisPlaying(true);
                }}>Play Song</button>
                <button className="relative right-12 top-20 bg-red-500 p-3 border rounded-lg hover:bg-red-600" onClick={() => {
                  let songIndex = -1;
                  userSongs.forEach((item) => {
                    if(item.title === song.title){
                      songIndex = 1;
                    }
                  });
                  if(songIndex === -1){
                  setUserSongs([...userSongs, { title: song.title, url: song.url }]);
                }
                }}>Add to Playlist</button>
              </div>
              <div className="w-24 h-28 bg-white">
                <img src={song.img} className="border-black border-2" alt={song.filter}></img>
              </div>
              <div className="relative top-10 p-4 items-center text-center">
                <p className="font-semibold">{song.title}</p>
                <p className="font-light">{song.filter}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      
    </div>
  )
}

export default Body


