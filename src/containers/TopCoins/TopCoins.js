import { useEffect, useRef, useState } from "react";
import CoinsTable from "../../components/CoinsTable/CoinsTable";
import Search from "../../components/Search/Search";
import { useCoins } from "../../store";
import Fuse from "fuse.js";

import Animation from '../../components/Animation/Animation'

import Popup from '../../components/Popup/Popup'

const filterCoins = (text, allCoins) => {
    if (text !== "") {
      const options = {
        keys: ["name", "symbol"],
        threshold: 0.1,
      };
      const fuse = new Fuse(allCoins, options);
      const data = fuse.search(text).map((val) => {
        return val["item"];
      });
      return data
    } else {
      return allCoins
    }
  };

export default function TopCoins() {

    const [text, setText] = useState('')
    const { data, isLoading } = useCoins()
    const [coinsData, setCoinsData] = useState([])


    const [updateCoinData, setUpdateCoinData] = useState(undefined)

    const inputRef = useRef(null)

    // Debounce text
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!data) return
            const filteredCoins = filterCoins(text, data)
            if(!inputRef.current || text === inputRef.current.value) setCoinsData(filteredCoins)
        }, 300);

    return () => clearTimeout(timer);
    }, [text, data])


    const updateLocalCoinData = (coinId, investedValue, quantity, symbol, name) => {
      let data = JSON.parse(localStorage.getItem("data"))
      if (!data) {
        data = []
      }
      data = data.filter(coin => {
        const { id } = coin
        return id !== coinId
      })
      data = [...data, { id : coinId, buyPrice : investedValue / quantity, quantity, symbol, name }]
      localStorage.setItem("data", JSON.stringify(data))
      setUpdateCoinData(undefined)
    }

    const renderTable = () => {
      if (data && coinsData.length === 0) {
          return <Animation astronaut text="Search returned no results. Are you lost?"/>
      }
      return <CoinsTable data={coinsData} update={(data) => setUpdateCoinData(data)}/>
    }

    if (isLoading || (data && coinsData.length === 0 && text === '')) {
        return <Animation loader/>
    }

  return (
    <>
      <Popup open={updateCoinData !== undefined} onClose={() => setUpdateCoinData(undefined)} coinData={updateCoinData} onPopupUpdateClick={updateLocalCoinData}/>
      <Search text={text} setText={setText} inputRef={inputRef}/>
      {renderTable()}
    </>
  )
}