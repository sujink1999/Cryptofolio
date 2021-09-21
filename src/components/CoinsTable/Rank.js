import './CoinsTable.css'

export default function Rank({ rank }) {
    return (<div className="rank-container">
        <p className="rank">
            {rank}
        </p>
    </div>)
}