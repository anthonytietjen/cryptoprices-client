import React from 'react'

export const CryptoTable = ({ cryptos }) => (
  <div className="App">
    <header className="App-header">
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', width: 100 }}>
              Crypto
            </th>
            <th style={{ textAlign: 'left' }}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map(crypto => (
            <tr key={crypto.id}>
              <td style={{ textAlign: 'left' }}>
                {crypto.name}
              </td>
              <td style={{ textAlign: 'left' }}>
                ${crypto.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <iframe
          src="https://dashboard.serverless.com"
          style={{ height: 500, width: 1200 }}
        >
        </iframe> */}
    </header>
  </div>
)