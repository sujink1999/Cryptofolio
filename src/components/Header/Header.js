import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from './../../assets/images/logo.svg'

import './Header.css'


export default function Header() {
    return (
        <div className="header-container">
            <div className="branding">
                <Logo />
            <h1 className="header-title-web">Cryptofolio</h1>
            </div>
            <h1 className="header-title-mobile">Cryptofolio</h1>

            <div className="nav">
                <NavLink exact to="/" activeClassName="active">
                    Portfolio
                </NavLink>
                <NavLink to="/list" activeClassName="active">
                    Buy / Track coins
                </NavLink>
            </div>
            <div className="profile">
                <img src="https://avatars.dicebear.com/api/human/1.svg" alt=""></img>
            </div>
        </div>
    )
}