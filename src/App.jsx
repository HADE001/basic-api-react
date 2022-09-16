import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data , setData] = useState("loading...") 
 
function fatchData(){  
  axios.get("https://api.chucknorris.io/jokes/random") .then((res)=>  {
    console.log(res.data.value)
    setData(res.data.value)
  }).catch((err)=> {
    console.log(err)
  })
}
  useEffect(()=> {
    fatchData();
  }, [])

  return <div align="center">
    <h1>my api</h1>
    <h2>{data}</h2>
    <button onClick={fatchData}>คลิก</button>
  </div>
}

export default App;