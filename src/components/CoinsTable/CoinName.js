export default function CoinName({image, name}) {
    return <div className="coin-name">
        <img src={image} alt="">
        </img>
        <p>
            {name}
        </p>
    </div>
}