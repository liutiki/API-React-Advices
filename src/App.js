import './App.css';
import { useEffect, useState } from 'react';


function App() {

const [advice, setAdvice] = useState('');



useEffect(() => {
    getAdvice();
}, [])

const getAdvice = async () => {
const response = await fetch(`http://www.boredapi.com/api/activity/`);
const data = await response.json();
setAdvice(data.activity)
}

 const NewAdvice = () => {

 }

return (

<div className="App">

<p className="advice"> {advice} </p>

<button className="btn" onClick={getAdvice}>Get Advice</button>



</div>

);

}


export default App;
