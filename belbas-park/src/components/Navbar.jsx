import React, {useState} from 'react';
 import logo from '../images/belbaslogo.jpg'; 

function Navbar() {

  const [nav, setnav] = useState(false);

  const changeBakground = () => {
    if(window.scrollY >= 50) {
      setnav(true);
    }
    else{

      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBakground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href='/' className='logo'>
          <img src={logo} alt=''>
        
        </img>
        
      </a>
      <input type='checkbox' className='menu-btn' id='menu-btn'/>
      <label className='menu-icon' htmlFor= 'menu-btn'>
        <span className='nav-icon'></span>
      </label>
        <ul className='menu'>
        <li><a href='#main'> Home      </a></li>          
        <li><a href='#services'> Services  </a></li>
        <li><a href='#about'> About us  </a></li>
        <li><a href='#contact'> Contact us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;
