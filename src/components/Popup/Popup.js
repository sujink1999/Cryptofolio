import React, { useEffect, useState } from 'react'
import { styled} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

import './Popup.css'

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  backdrop-filter: blur( 3px );
  background-color: rgba(0, 0, 0, 0.2);

`;

export default function Popup({coinData, onPopupUpdateClick, open, onClose}) {

    const [investedValue, setInvestedValue] = useState(null)
    const [quantity, setQuantity] = useState(0)
    const [currentPrice, setCurrentPrice] = useState(null)

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("data"))
        if(coinData){
            if (localData){
                const currentCoin = localData.find(coin => {
                    return coin.id === coinData.id
                })
                if (currentCoin){
                    const {buyPrice, quantity} = currentCoin
                    setInvestedValue(Number((buyPrice * quantity).toFixed(2)))
                    setQuantity(quantity)
                }
            }
            const {price} = coinData
            setCurrentPrice(price)
        }
        
    }, [coinData])

    useEffect(() => {
        if(investedValue && currentPrice){
            setQuantity(investedValue / currentPrice)
        }
    }, [investedValue, currentPrice])

    return <StyledModal
    disableAutoFocus
     open={open}
     onClose={onClose}
     BackdropComponent={Backdrop}
     aria-labelledby="modal-title"
   >
       <div className="popup-container" style={{tabIndex: -1}}>
    <div className="popup-header">
        <p>Update portfolio - </p>
        <span>{coinData && coinData.symbol}</span>
    </div>
    <p>Invested Value</p>
    <div className="popup-input">
    <h1 className="popup-padding">₹</h1>
    <input type="number" autoFocus={true} value={investedValue} onChange={e => setInvestedValue(e.target.value)}></input>
    </div>
    <p>Quantity of ETH</p>
    <div className="popup-input">
    <h1>{coinData && coinData.symbol}</h1>
    <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)}></input>
    </div>
    <button className="popup-button" onClick={() => {
        const {id, name, symbol} = coinData
        onPopupUpdateClick(id, investedValue, quantity, symbol, name)
        setInvestedValue(null)
        setQuantity(0)
        }}>
        Update
    </button>
</div>
</StyledModal>

}

