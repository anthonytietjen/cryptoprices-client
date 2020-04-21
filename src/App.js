import React, { useEffect, useState } from 'react';
import './App.css';
import { loadData, saveData } from './api/api'
import { Loading } from './views/Loading';
import { CryptoTable } from './views/CryptoTable';
import { CryptoForm } from './views/CryptoForm'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cryptos, setCryptos] = useState(undefined)
  const [pricePoints, setPricePoints] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await loadData()
    setCryptos(result.cryptos)
    setPricePoints(result.pricePoints || {})
    setIsLoading(false)
  }

  const handleSave = async (pricePoints) => {
    setIsLoading(true)
    await saveData(pricePoints)
    setPricePoints(pricePoints)
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="App">
      <header className="App-header">
        <CryptoTable
          cryptos={cryptos}
        />
        <CryptoForm
          data={pricePoints}
          handleSave={handleSave}
        />
      </header>
    </div>
  )
}

export default App;
