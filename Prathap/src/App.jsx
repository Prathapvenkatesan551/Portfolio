
import './App.css'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Resume from './Components/Resume'

function App() {
  return (
    <>
      <NavBar/>
      <div className='container'>
      <div className='profile'>
      <img src="profile.jpg" alt="profile" className='DP' />
      <h3>Prathap V</h3>
      <h2>Full Stack Developer</h2>
      <div className='location'>
      <button className='pinbutton'><img src="pin.png" alt="pin" className='pin'/></button>
      <div className='title1'>
      <label htmlFor="" className='holder'>LOCATION</label>
      <label htmlFor="" className='data'>Erode , TamilNadu</label>
      </div>
      </div>
      <div className='location'>
      <button className='pinbutton'><img src="mail.png" alt="pin" className='pin'/></button>
      <div className='title1'>
      <label htmlFor="" className='holder'>EMAIL</label>
      <label htmlFor="" className='data'>Prathap2venkatesan@gmail.com</label>
      </div>
      </div>
      <div className='location'>
      <button className='pinbutton'><img src="mobile.png" alt="pin" className='pin'/></button>
      <div className='title1'>
      <label htmlFor="" className='holder'>MOBILE</label>
      <label htmlFor="" className='data'>+91 6383078431</label>
      </div>
      </div>
      <div className='socialmedia'>
      <button><img src="linkedin.png" alt="" id='sm'/></button>
      <button><img src="instagram.png" alt="" id='sm'/></button>
      <button><img src="facebook.png" alt="" id='sm'/></button>
      </div>


      </div>
      <div className='pages'>
        {/* <About/> */}
        <Resume/>
      </div>
      </div>
    </>
  )
}

export default App
