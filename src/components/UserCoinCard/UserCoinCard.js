import React from 'react'

import {ReactComponent as Profit} from './../../assets/images/profit.svg'
import {ReactComponent as Loss} from './../../assets/images/loss.svg'
import ReturnsText from '../ReturnsText/ReturnsText'
import { getImage, numberWithCommas } from '../../utils/functions'

import './UserCoinCard.css'

const UserCoinCard = React.forwardRef(({ data }, ref) => {
    const { id, symbol, currentPrice, buyPrice, quantity, name} = data
    return (
        <div className="ucc-container" ref={ref}>
            <div className="ucc-image-container" >
                <img src={getImage(id)} alt="img"></img>
            </div>
            <div className="ucc-details">

            <div className="ucc-1">
                <h3>{name}</h3>
                <p>{`${quantity.toFixed(8)}${symbol}`}</p>
            </div>
            <div className="ucc-2">
                <div>
                    <h3>₹</h3>
                    <p>{numberWithCommas((quantity * currentPrice).toFixed(2))}</p>
                    
                </div>
                    <div>
                        { currentPrice - buyPrice >= 0 ? <Profit/> : <Loss/>}
                        <ReturnsText value={((currentPrice - buyPrice) / buyPrice)} percent decimalPlaces={2}/>
                </div>
                </div>
            </div>
                
        </div>
    )
});

export default UserCoinCard