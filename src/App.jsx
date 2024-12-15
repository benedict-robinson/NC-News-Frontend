import Header from './Compenents/Header'
import PostAndSignIn from './Compenents/PostAndSignIn'
import NavBar from './Compenents/NavBar'
import RouteManager from './Compenents/RouteManager'
import { useEffect, useState } from 'react';
import ThemeToggle from './Compenents/ThemeToggle';

function App() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1400);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDesktop) {
    return (
      <>
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
    <div className='top-bar'>
      <Header />
      <PostAndSignIn />
    </div>
    <div className="navBar">
    <NavBar />
    </div>
    
    <div>
      <RouteManager />
    </div>
    </>
  )
}

export default App
