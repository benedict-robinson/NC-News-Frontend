import Header from './Compenents/Header'
import PostAndSignIn from './Compenents/PostAndSignIn'
import NavBar from './Compenents/NavBar'
import StateManager from './Compenents/StateManager'

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
      <StateManager />
    </div>
    </>
  )
}

export default App
