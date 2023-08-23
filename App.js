import {useEffect, useState} from 'react'
import axios from 'axios'
import CoinsTable from './components/CoinsTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const marketURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
  
  const getData = async () => {
    const res = await axios.get(marketURL)
    console.log(res.data)
    setCoins(res.data)
  }
  
useEffect(() => {
  getData()
}, [])

  

  return (
    <div className="container">
      <div className="row">
        <label htmlFor="input" className='form-control form-label bg-dark text-light border-0 mt-4 text-center' >a</label>
        <input type="text" placeholder='aasoasoaoao' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)} />
        <CoinsTable coins={coins} search={search} ></CoinsTable>
      </div>
    </div>
  );
}

export default App;
