import './BottomNav.css'

import { NavLink } from 'react-router-dom'
import { ReactComponent as Wallet } from './../../assets/images/wallet.svg'
import { ReactComponent as Update } from './../../assets/images/update.svg'

export default function Header() {
    return (
        <div className="footer-container">
                <NavLink exact to="/" activeClassName="active">
                    <Wallet/>
                    <p>Portfolio</p>
                </NavLink>
                <NavLink to="/list" activeClassName="active">
                    <Update/>
                    <p>Buy / Track coins</p>
                </NavLink>
        </div>
    )
}