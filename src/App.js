import {useState} from 'react'
import QRCode from "react-qr-code"
function App() {
  const[value, setValue]=useState("");
  return (
    <div className="App">
      <center>
        <br></br>
        <br></br>
      <div className='input-wrapper'>
      <input type='text'onChange={(e)=>setValue(e.target.value)}></input>
      </div>
      <br></br>
      <br></br>
      <QRCode
        value={value}
/>
</center>
    </div>
  );
}

export default App;
