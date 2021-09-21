import { useState } from 'react'
import { numberWithCommas } from '../../utils/functions'
import ReturnsText from '../ReturnsText/ReturnsText'
import { ReactComponent as CoinBag } from './../../assets/images/coin-bag.svg'
import './Overview.css'

export default function Overview({ data }) {
    const [totalInvestments] = useState(() => data.reduce((acc, coin) => {
        const { buyPrice, quantity } = coin
        return acc + buyPrice * quantity
    }, 0))

    const [currentValue] = useState(() => data.reduce((acc, coin) => {
        const { currentPrice, quantity } = coin
        return acc + currentPrice * quantity
    }, 0))

    return (<div className="overview-container">
        <div className="overview-header">
            <div >
                <h1>Your Investments</h1>
                <p>{`You have invested in ${data.length} coins`}</p>
            </div>
            <CoinBag/>
        </div >
        <div className="overview-content">
            <div className="overview-web">
                <div className="overview-current">
                    <h3>Current Value</h3>
                    <p>{`₹ ${numberWithCommas(currentValue.toFixed(2))}`}</p>
                </div>
                <div className="overview-total">
                    <h3>Total Investments</h3>
                    <p>{`₹ ${numberWithCommas(totalInvestments.toFixed(2))}`}</p>
                </div>
                <div className="overview-returns">
                    <div className="total-returns">
                        <h3>Total returns</h3>
                        <ReturnsText value={(currentValue - totalInvestments)/totalInvestments} percent fontSize="18px" decimalPlaces={2}/>
                    </div>
                    <ReturnsText value={currentValue - totalInvestments} inr addCommas fontSize="16px" decimalPlaces={2}/>
                </div>
            </div>

            <div className="overview-mobile">
                <div className="overview-current">
                    <h3>Total Returns</h3>
                    <ReturnsText value={(currentValue - totalInvestments)} inr addCommas fontSize="16px" decimalPlaces={2}/>
                </div>
                <div className="overview-total">
                    <h3>Gain / Loss</h3>
                    <ReturnsText value={((currentValue - totalInvestments)/totalInvestments)} percent fontSize="16px" decimalPlaces={2}/>
                </div>
            </div>
            

        </div>

    </div>)
}