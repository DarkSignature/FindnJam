import PropTypes from 'prop-types'
import Navbar from './Navbar'
import "../index.css"


const Header = ({title, navRef, navButtonRef, buttonColor, navColorRef, showList, showSaved, backToMenu}) => {

  return (
    <div className="header-container" ref={navColorRef}>
      <h1 className="header-title" onClick={backToMenu}>{title}</h1>
      <Navbar navRef={navRef} navButtonRef={navButtonRef} buttonColor={buttonColor} showList={showList} showSaved={showSaved} />
    </div>
  )
}

export default Header




// import PropTypes from 'prop-types'
// import Navbar from './Navbar'
// import {useRef} from 'react'

// const Header = ({title}) => {
//   const navRef = useRef();

//     const showNavBar = () => {
//       console.log('Before toggle:', navRef.current.classList);
//       navRef.current.classList.toggle("responsive_nav");
//       console.log('After toggle:', navRef.current.classList);
//     }

//   return (
//     <div ref={navRef} className="header-container">
//       <h1>{title}</h1>
//       <Navbar showNavBar={showNavBar}/>
//     </div>
//   )
// }

// export default Header
