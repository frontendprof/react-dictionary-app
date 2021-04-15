
import React,{useState,useEffect} from "react";
import Container from '@material-ui/core/Container';

import axios from 'axios';
import './App.css';


function App() {
  const [meanings,setMeanings]=useState([])


  const apiDict=async()=> {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/glean');
      
      
      setMeanings(data.data)
    } catch (err) {
      console.error(err);
    }
  }
  console.log(meanings);

  useEffect(()=>{
    apiDict()
  },[])


  return (
    <div className="App" style={{ height:"100vh",backgroundColor:"#282c34",color:"white" }}>
      <Container maxWidth="md"style={{ height:"100vh",display:"flex",flexDirection:"column" }}>DIctionary</Container>
    </div>
  );
}

export default App;
