import './App.css'
import { useState } from 'react'


function App() {
  const [btnColor, setBtnColor] = useState('green')
  const newBtnColor = btnColor === 'green' ? 'blue' : 'green' 
  const [inputDisabled, setInputDisabled] = useState(false)


  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <button 
      style={{backgroundColor: btnColor}}
      onClick={() => setBtnColor(newBtnColor)}
      >
         Change button color to {newBtnColor}
      </button>

      <input
      type='checkbox'
      defaultChecked={inputDisabled}
      onChange={(event) => setInputDisabled(event.target.defaultChecked)}
      />
      
    </div>
  )
}

export default App


