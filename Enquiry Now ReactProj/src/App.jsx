import { useState } from 'react'
import './App.css'

function App() {
  const [modelstate, setmodelstate] = useState(false);

  return (
    <div className="App">
      <button className="Bookside" onClick={() => setmodelstate(true)} >Book a side visit</button>
      <div onClick={() => setmodelstate(false)} className={`modeloverly ${modelstate ? 'Modelshow' : ''}`}></div>
      <div className={`modeldev ${modelstate ? 'showModeldiv' : ''}`} >
        <h3>Enquiry Now <span onClick={() => setmodelstate(false)} >&times;</span></h3>
        <form className="enquiry-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <button type="submit">Send</button>
        </form>
      </div>

    </div>
  )
}

export default App
