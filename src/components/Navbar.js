import Button from './Button'
import {FaTimes, FaBars} from 'react-icons/fa'
import "../index.css"
import {useRef} from 'react'

const Navbar = ({navRef, showList, showSaved}) => {
    const onClick = () => {
        console.log('Click')
    }

    const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav");
      console.log('After toggle:', navRef.current.classList);
    }

  return (
    <div >
    <nav ref={navRef}>
      {/* <button className='btn' onClick={onClick}>Home</button> */}
      {/* <button className='btn' onClick={onClick}>TBS</button> */}
      <button className='btn' onClick={showSaved}>Saved Playlist</button>
      <button className='btn' onClick={showList}>Current Playlist</button>
      <button className="navBtn navClose" onClick={showNavBar}><FaTimes /></button>
    </nav>
      <button className="navBtn" onClick={showNavBar}><FaBars /></button>
    </div>
  )
}

export default Navbar

{/* <Button color={buttonColor} text='Home' textColor='white' onClick={onClick}/>
      <Button color={buttonColor} text='TBS' textColor='white' onClick={onClick}/>
      <Button color={buttonColor} text='TBS' textColor='white' onClick={onClick}/>
      <Button color={buttonColor} text='TBS' textColor='white' onClick={onClick}/> */}
