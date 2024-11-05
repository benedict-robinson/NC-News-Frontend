import Header from './Compenents/Header'
import PostAndSignIn from './Compenents/PostAndSignIn'
import NavBar from './Compenents/NavBar'
import RouteManager from './Compenents/RouteManager'

function App() {

  return (
    <>
    <div className='top-bar'>
      <Header />
      <PostAndSignIn />
    </div>
    <div className="navBar">
    <NavBar />
    </div>
    
    <div className="content">
      <RouteManager />
    </div>
    </>
  )
}

export default App
