import React, { useState } from 'react'

export const CryptoForm = ({ data, handleSave }) => {
  const [dataPoints, setDataPoints] = useState(data)

  return (
    <div>
      <div>
        <input
          type="text"
          value={dataPoints.btcSaved}
          onChange={(e) => setDataPoints({ ...dataPoints, btcSaved: parseFloat(e.target.value) })}
        />
        <input
          type="text"
          value={dataPoints.btcBuffer}
          onChange={(e) => setDataPoints({ ...dataPoints, btcBuffer: parseFloat(e.target.value) })}
        />
      </div>
      <div>
        <input
          type="text"
          value={dataPoints.ltcSaved}
          onChange={(e) => setDataPoints({ ...dataPoints, ltcSaved: parseFloat(e.target.value) })}
        />
        <input
          type="text"
          value={dataPoints.ltcBuffer}
          onChange={(e) => setDataPoints({ ...dataPoints, ltcBuffer: parseFloat(e.target.value) })}
        />
      </div>
      <div>
        <input
          type="text"
          value={dataPoints.ethSaved}
          onChange={(e) => setDataPoints({ ...dataPoints, ethSaved: parseFloat(e.target.value) })}
        />
        <input
          type="text"
          value={dataPoints.ethBuffer}
          onChange={(e) => setDataPoints({ ...dataPoints, ethBuffer: parseFloat(e.target.value) })}
        />
      </div>
      <div>
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSave(dataPoints)
          }}
        />
      </div>
    </div>
  )
}