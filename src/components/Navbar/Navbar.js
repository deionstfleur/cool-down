import React, {Component} from 'react'
import { MenuItems } from './MenuItems'
import '../../components/Navbar/Navbar.css'
import {Link} from 'react-router-dom'
function Nav() {
    return (
       <div className='header'>
           <Link to='/'>
                <h1 className='header_logo'>CDB</h1>
           </Link>

           <div>
                <ul className="header_center">
                    <Link>
                         <li>Home</li>
                    </Link>

                    <Link>
                        <li>About</li>
                    </Link>

                    <Link>
                         <li>Services</li>          
                    </Link>
                </ul>
           </div>

           <div className='header_right'>

               <Link to="/Contact">
                     <button>Contact Us</button>
               </Link>
           </div>
       </div>
    )
}

export default Nav
