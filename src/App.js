import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Loading } from './views/Loading';
import { CryptoTable } from './views/CryptoTable';

function App() {
  const [cryptos, setCryptos] = useState(undefined)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await axios.get('https://8d9vin02wd.execute-api.us-east-1.amazonaws.com/dev/v1/prices')
    setCryptos(result.data.cryptos)
  }

  if (!cryptos) {
    return <Loading />
  }

  return <CryptoTable cryptos={cryptos} />
}

export default App;
