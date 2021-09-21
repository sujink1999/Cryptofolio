import { NavLink } from 'react-router-dom'

import { ReactComponent as Logo } from './../../assets/images/logo.svg'
import { ReactComponent as LogoMobile } from './../../assets/images/logo-mobile.svg'

import './Header.css'


export default function Header() {
    return (
        <div className="header-container">
            <LogoMobile className="header-logo-mobile"/>
            <div className="branding">
                <Logo className="header-logo-web"/>
                <h1 className="header-title">Cryptofolio</h1>
            </div>

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