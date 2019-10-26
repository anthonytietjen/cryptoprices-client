import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Loading } from './views/Loading';
import { CryptoTable } from './views/CryptoTable';

const apiBaseUri = window.location.hostname === "localhost" ?
  "http://localhost:3000" : "https://8d9vin02wd.execute-api.us-east-1.amazonaws.com/dev"

function App() {
  const [cryptos, setCryptos] = useState(undefined)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await axios.get(apiBaseUri + '/v1/prices')
    setCryptos(result.data.cryptos)
  }

  if (!cryptos) {
    return <Loading />
  }

  return <CryptoTable cryptos={cryptos} />
}

export default App;
