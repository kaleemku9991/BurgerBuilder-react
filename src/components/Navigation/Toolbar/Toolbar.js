import React from 'react';
import ToolbarCss from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className="Logo1">
    <Logo/>
    </div>
    <nav className="DesktopOnly">
      <NavigationItems/>
    </nav>
  </header>

);

export default toolbar;