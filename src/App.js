import React, { useEffect, useState } from 'react';
import './App.css';
import { loadData, savePricePoints } from './api/api'
import { Loading } from './views/Loading';
import { CryptoTable } from './views/CryptoTable';
import { CryptoForm } from './views/CryptoForm'
import { beep } from './utils/beep';
import { useInterval } from './utils/useInterval'

const pingInterval = 60000

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cryptos, setCryptos] = useState(undefined)
  const [pricePoints, setPricePoints] = useState({})

  useEffect(() => {
    firstLoad()
  }, [])

  useInterval(() => {
    handlePing()
  }, pingInterval)

  const firstLoad = async () => {
    const result = await loadData()
    setCryptos(result.cryptos)
    setPricePoints({
      btcSaved: parseFloat(result.cryptos.find(x => x.id === 'btc').price),
      btcBuffer: 10,
      ltcSaved: parseFloat(result.cryptos.find(x => x.id === 'ltc').price),
      ltcBuffer: 1,
      ethSaved: parseFloat(result.cryptos.find(x => x.id === 'eth').price),
      ethBuffer: 1,
    })
    setIsLoading(false)
  }

  const handleSave = async (pricePoints) => {
    setIsLoading(true)
    await savePricePoints(pricePoints)
    setPricePoints(pricePoints)
    setIsLoading(false)
  }

  const handlePing = async () => {
    const result = await loadData()

    console.log('result.cryptos', result.cryptos)

    const btcPrice = parseFloat(result.cryptos.find(x => x.id === 'btc').price)
    const ltcPrice = parseFloat(result.cryptos.find(x => x.id === 'ltc').price)
    const ethPrice = parseFloat(result.cryptos.find(x => x.id === 'eth').price)

    console.log({ btcPrice, ltcPrice, ethPrice })
    console.log(pricePoints)

    // console.log(pricePoints.btcSaved - pricePoints.btcBuffer)
    // console.log(pricePoints.btcSaved + pricePoints.btcBuffer)
    // console.log(pricePoints.ltcSaved - pricePoints.ltcBuffer)
    // console.log(pricePoints.ltcSaved - pricePoints.ltcBuffer)
    // console.log(pricePoints.ethSaved - pricePoints.ethBuffer)
    // console.log(pricePoints.ethSaved + pricePoints.ethBuffer)

    // if (btcPrice <= pricePoints.btcSaved - pricePoints.btcBuffer
    //   ||
    //   btcPrice >= pricePoints.btcSaved + pricePoints.btcBuffer) {
    //   beep(100, 520, 200)
    // }
    if (ltcPrice <= pricePoints.ltcSaved - pricePoints.ltcBuffer) {
      await beep(100, 520, 100)
      await beep(100, 320, 100)
    }
    if (ltcPrice >= pricePoints.ltcSaved + pricePoints.ltcBuffer) {
      await beep(100, 320, 100)
      await beep(100, 520, 100)
    }
    // if (ethPrice <= pricePoints.ethSaved - pricePoints.ethBuffer
    //   ||
    //   ethPrice >= pricePoints.ethSaved + pricePoints.ethBuffer) {
    //   beep(100, 520, 200)
    // }

    setCryptos(result.cryptos)
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
