import React, { useEffect, useState } from 'react'
import cars from './api/cars.json'
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const [data,setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  useEffect(()=>{
    setData(cars)
    setFilteredData(cars)
  },[])

  const clikID = (bodyType) => {
    if(bodyType === "all"){
      setFilteredData(cars);
    }else{
      let x = data.filter((item) => item.bodyType === bodyType);
      setFilteredData(x);
      console.log(x)
    }
  };
  console.log(cars)
  return (
    <div>
    <Navbar clikID={(bodyType) => clikID(bodyType)}/>
    <Card data={filteredData} />
    </div>
  );
}

export default App;
