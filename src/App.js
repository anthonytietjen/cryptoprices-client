import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [prices, setPrices] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await axios.get('https://8d9vin02wd.execute-api.us-east-1.amazonaws.com/dev/v1/prices')
    setPrices(result.data)
    console.log(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(prices)}
      </header>
    </div>
  );
}

export default App;
