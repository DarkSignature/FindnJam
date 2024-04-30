import Header from './components/Header'
import Body from './components/Body'
import "../src/index.css"
import { useRef, useState } from 'react';
import Player from './components/Player';
import { songList } from './components/audio';
import Playlist from './components/Playlist';
import Savedplaylist from './components/Savedplaylist';

function App() {
  const [filteredSongs, setFilteredSongs] = useState(songList);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [buttonName, setButtonName] = useState("Dark Mode");
  const [buttonColor, setButtonColor] = useState("black");
  const [userSongs, setUserSongs] = useState([]);
  const buttonRef = useRef();
  const contentRef = useRef();
  const bodyRef = useRef();
  const navButtonRef = useRef();
  const navRef = useRef();
  const navColorRef = useRef();
  const [songs, setSongs] = useState(songList);
  const [playList, setPlayList] = useState(userSongs.length === 0 ? songs : userSongs);
  const [songChoice, setSongChoice] = useState(playList[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const listRef = useRef();
  const [playList1, setPlayList1] = useState([]);
  const [playList2, setPlayList2] = useState([]);
  const [playList3, setPlayList3] = useState([]);
  const savedRef = useRef();
  const bodyContentRef = useRef();
  const bodyColorRef = useRef();
  const contentColorRef = useRef();
  const selectRef = useRef();


  const filterSongs = (filterValue) => {
    if (filterValue === "all") {
      setFilteredSongs(songList);
      setSelectedFilter("all");
    } else {
      const filtered = songList.filter((song) => song.filter === filterValue);
      setFilteredSongs(filtered);
      setSelectedFilter(filterValue);
    }
  };

  // Make 2 states, one for all songs, one for user choice. One more state to check which one is being used so that songChoice only uses one of them
  const changeColor = () => {
  buttonRef.current.classList.toggle("dark_mode_button");
  console.log("Button Class " + buttonRef.current.classList);
}

  const changeBody = () => {
    bodyRef.current.classList.toggle("dark_mode");
    console.log("Body Class " + bodyRef.current.classList);
  }

  const changeContent = () => {
    contentRef.current.classList.toggle("dark_mode_content");
    console.log("Content Class " + contentRef.current.classList);
  }

  const changeNav = () => {
    navRef.current.classList.toggle("dark_mode_nav");
    console.log("Nav Class " + navRef.current.classList);
  }

  const changeNavColor = () => {
    navColorRef.current.classList.toggle("dark_mode_header");
    console.log("Header Class " + navColorRef.current.classList);
  }

  const changeSave = () => {
    savedRef.current.classList.toggle("dark_mode_saved");
  }

  const showList = () => {
    listRef.current.classList.toggle("list-shown");
  }

  let saved = 0;
  const showSaved = () => {
    savedRef.current.classList.toggle("open-box");
    if(saved === 0){
      saved = 1;
    }
    else if(saved === 1){
      saved = 0;
    }
  }
  
  const changeContentBody = () => {
    selectRef.current.classList.toggle("dark_select");
    bodyContentRef.current.classList.toggle("dark_body_content");
    bodyColorRef.current.classList.toggle("dark_body_color");
    // contentColorRef.current.classList.toggle("dark_content_color");
  }

  const colorChange = () => {
    if(buttonName == "Light Mode"){
    setButtonName("Dark Mode");
    }
    else{
      setButtonName("Light Mode");
    }
    changeColor();
    changeBody();
    changeSave();
    // changeContent();
    changeNav();
    changeNavColor();
    changeContentBody();
  }

  const backToMenu = () => {
    if(saved === 1){
      savedRef.current.classList.toggle("open-box");
      saved = 0;
    }
  }

  return (
    <div ref={bodyRef} className="real_body">
      <div className="bg-red-300 rounded-full fixed left-0 w-5 h-5"></div>
      <Header title="Find 'n' Jam" navRef={navRef} navButtonRef={navButtonRef} buttonColor={buttonColor} navColorRef={navColorRef} showList={showList} showSaved={showSaved} backToMenu={backToMenu}/>
      <Body filteredSongs={filteredSongs} filterSongs={filterSongs} selectedFilter={selectedFilter} contentRef={contentRef} buttonRef={buttonRef} buttonName={buttonName} onClick={colorChange} setSongChoice={setSongChoice} songs={songs} isPlaying={isPlaying} setisPlaying={setisPlaying} userSongs={userSongs} setUserSongs={setUserSongs} playList={playList} songChoice={songChoice} bodyContentRef={bodyContentRef} bodyColorRef={bodyColorRef} contentColorRef={contentColorRef} selectRef={selectRef}  />
      <Player songChoice={songChoice} setSongChoice={setSongChoice} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setisPlaying={setisPlaying} userSongs={userSongs} setUserSongs={setUserSongs} playList={playList} setPlayList={setPlayList}/>
      <Playlist playList={playList} setPlayList={setPlayList} userSongs={userSongs} setUserSongs={setUserSongs} listRef={listRef} showList={showList} playList1={playList1} setPlayList1={setPlayList1} playList2={playList2} setPlayList2={setPlayList2} playList3={playList3} setPlayList3={setPlayList3}/>
      <Savedplaylist savedRef={savedRef} playList={playList} setPlayList={setPlayList} playList1={playList1} setPlayList1={setPlayList1} playList2={playList2} setPlayList2={setPlayList2} playList3={playList3} setPlayList3={setPlayList3}/>
    </div>
  );
}

export default App;
