import Header from './Compenents/Header'
import PostAndSignIn from './Compenents/PostAndSignIn'
import NavBar from './Compenents/NavBar'
import RouteManager from './Compenents/RouteManager'
import { useEffect, useState } from 'react';
import SearchBar from './Compenents/SearchBar.jsx';

function App() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDesktop) {
    return (
      <>
      <SearchBar />
      <div className='top-bar'>
        <Header />
      <div className="navBar">
      <NavBar />
      </div>
        <PostAndSignIn />
      </div>
      
      <div className="content">
        <RouteManager />
      </div>
      </>
    )
  }

  return (
    <>
    <SearchBar />
    <div className='top-bar'>
      <Header />
      <PostAndSignIn />
    </div>
    <div className="navBar-container">
    <NavBar />
    </div>
    
    <div>
      <RouteManager />
    </div>
    </>
  )
}

export default App
