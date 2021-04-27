import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons';
import withAppContentWrapper from "../../hoc/withAppContentWrapper";


import './style.scss'


const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{color: '#242424'}}>
            <div className='navbar'>
                <h1 className='navbar-logo'>Logo</h1>
                <div className="menu-icon" onClick={showSidebar}>
                    {sidebar ? <AiIcons.AiOutlineClose/> : <FaIcons.FaBars/>}
                </div>
                <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {sidebar && item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </IconContext.Provider>
    );
}

export default withAppContentWrapper(Header);