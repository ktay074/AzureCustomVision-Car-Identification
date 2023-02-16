import React from 'react'
import TurnersLogo from '../assets/turnerscars_logo.jpg'
import './Header.css';

const Header = () => {
    const NavItems = ['Find a Car', 'How to Buy', 'Sell your Car', 'Finance & Insurance', 'Turners Subscription']
    
    const RenderNav = NavItems.map((item, index) =>
           <span key={index} className='NavButtons'>{item}</span>
    ); 

  return (
    <div>
        <div className='TurnersLogo'>
            <img src={TurnersLogo}></img>
        </div>
            
        <div className='BlueMenu'>
            {RenderNav}
        </div>
    </div>
  )
}

export default Header; 