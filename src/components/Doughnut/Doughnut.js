import React, { useEffect, useState } from "react"
import { PieChart } from "react-minimal-pie-chart"
import { getImage } from "../../utils/functions";
import './Doughnut.css'

export default function Doughnut({data, unselect, select}) {
    const [selected, setSelected] = useState(0)
    const [hovered, setHovered] = useState(undefined)
    const [coins, setCoins] = useState([])

    useEffect(() => {
        if (data && data.length > 0) {
            const total = data.reduce((acc, coin) => {
                const {quantity, buyPrice} = coin
                return acc + quantity * buyPrice
            }, 0)
            const doughnutData = data.map((coin, index) => {
                const { id, symbol, color, quantity, buyPrice } = coin
                return {
                    id,
                    title: symbol,
                    color: hovered===index?'#69CC8E':color,
                    value: Number((((quantity * buyPrice) / total) * 100).toFixed(0))
                }
            })
            setCoins(doughnutData)
        }
    }, [hovered, data])

    const renderCoinData = () => {
        let title, percentage;
        if (hovered === undefined && (coins.length===0 || selected === undefined)) {
            return <></>
        } else if (hovered !== undefined) {
            title = coins[hovered].title
            percentage = coins[hovered].value + '%'
        } else {
            title = coins[selected].title
            percentage = coins[selected].value + '%'
        }
        return (
            <div className="doughnut-coin-data">
                <h1>{title}</h1>
                <p>{percentage}</p>
                </div>
            )
    }


    return (
        <div className="doughnut-container">
            <div className="doughnut-chart-container">
                {renderCoinData()}
                <div className="doughnut">
                    <PieChart data={coins} lineWidth={15} animate
                        radius={PieChart.defaultProps.radius - 6}
                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                        segmentsShift={(index) => {
                            return data.length===1?0: index === selected ? 6 : 0
                        }}
                        onClick={(_, index) => {
                            unselect(selected)
                            setSelected(index === selected ? undefined : index);
                            if (index !== selected) {
                                select(index)
                            }
                        }}
                        onMouseOver={(_, index) => {
                            setHovered(index);
                        }}
                        onMouseOut={() => {
                            setHovered(undefined);
                        }}
                    />
                </div>
            </div>
            <div className="doughnut-coins-container">
                {
                    coins.map((coin, index) => (
                        <div className="doughnut-coin"
                            onMouseEnter={() => { setHovered(index) }}
                            key={coin.title}
                            onMouseLeave={() => { setHovered(undefined) }}
                            onClick={() => {
                                unselect(selected)
                                setSelected(index)
                                select(index)
                            }}
                        >
                        <img src={getImage(coin.id)} alt="img"></img>
                    </div>))
                }
            </div>
        </div>
            
    )   
}