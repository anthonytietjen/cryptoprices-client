import axios from 'axios'

const apiBaseUri = window.location.hostname === "localhost" ?
  "http://localhost:3000" : "https://8d9vin02wd.execute-api.us-east-1.amazonaws.com/dev"

export const loadData = async () => {
  const response = await axios.get(apiBaseUri + '/v1/prices')
  return response.data
}

export const saveData = async (pricePoints) => {
  const data = {
    pricePoints
  }
  const response = await axios.post(apiBaseUri + '/v1/savePricePoints', data)
  return response
}
