import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Card/Cards';
import axios from 'axios'

function App() {

  const initialData = {
    loading: true,
    datas: '',
    err: ''
  }
  const [data,setData] = useState(initialData)

  useEffect(()=>{
    axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
    .then(res=>{
        setData({
          loading:false,
          datas:res.data,
          err:''
        })
    })
    .catch(err=>{
      setData({
        loading:false,
        datas:'',
        err:err
      })
    })
  },[])

  return (
    <div className="App">
      <NavBar data={data}/>
      <Cards data={data}/>
      
    </div>
  );
}

export default App;
