import {useEffect, useRef, useState} from 'react'

import Doughnut from "../../components/Doughnut/Doughnut";
import Animation from '../../components/Animation/Animation';
import Overview from "../../components/Overview/Overview";
import UserCoinCard from "../../components/UserCoinCard/UserCoinCard";
import { useCoins } from "../../store";

import './UserHoldings.css'

const colors = ['#003f5c' ,'#58508d', '#8FD6E1', '#bc5090', '#ff6361', '#ffa600', '#1597BB', '#444444', '#726A95']

export default function UserHoldings() {

    const [ownedCoins, setOwnedCoins] = useState(null)
    const userCoinCards = useRef({})
    const { data: serverData, isLoading } = useCoins()

    useEffect(()=>{
        console.log("serverdata", isLoading, serverData)
    }, [isLoading, serverData])

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("data"))
        if (localData && serverData) {
            const currentValueHash = {}
            serverData.forEach(coin => {
                const {id, price } = coin
                currentValueHash[id] = price
            })

            const coins = localData.map((coin, index) => {
                const {id} = coin
                return {
                    ...coin,
                    color: colors[index % 5],
                    currentPrice : currentValueHash[id]
                }
            })
            setOwnedCoins(coins)
        }
    }, [serverData])

    const select = (index) => {
        userCoinCards.current[index].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        if (userCoinCards.current[index].childNodes && userCoinCards.current[index].childNodes[0]) {
            userCoinCards.current[index].childNodes[0].style.background = ownedCoins[index].color
        }
    }

    const unselect = (index) => {
        if (userCoinCards.current[index] && userCoinCards.current[index].childNodes  && userCoinCards.current[index].childNodes[0]) {
            userCoinCards.current[index].childNodes[0].style.background = '#333536'
        }
    }

    if (isLoading) {
        return <Animation loader/>
    }else if(!ownedCoins){
        return <Animation astronaut text="Your portfolio is empty. Time to buy some crypto !"/>
    }

    return (
        <>
            <Overview data={ownedCoins}/>
            <div className="user-holdings-container" >
                <Doughnut data={ownedCoins} select={select} unselect={unselect}/>
                <div className="user-coins">
                    {
                        ownedCoins.map((coin, index) => {
                            const {id} = coin
                            return <UserCoinCard data={coin} key={id} ref={(el) => {userCoinCards.current[index] = el}}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}