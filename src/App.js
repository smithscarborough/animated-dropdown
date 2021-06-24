import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Caret } from './icons/icons8-chevron-down.svg';
import { ReactComponent as VSCode } from './icons/icons8-visual-studio-code-2019.svg';
import { ReactComponent as Texas } from './icons/icons8-texas.svg';
import { ReactComponent as Runner } from './icons/icons8-sports-mode.svg';
import { ReactComponent as Peace } from './icons/icons8-hand-peace.svg';
import { ReactComponent as Plus } from './icons/icons8-plus-math.svg';
import { ReactComponent as Cat } from './icons/icons8-cat.svg';
import { ReactComponent as Mountain } from './icons/icons8-mountain.svg';
import { ReactComponent as Bell } from './icons/icons8-bell.svg';
import { ReactComponent as Message } from './icons/icons8-new-message.svg';
import { ReactComponent as Cog } from './icons/icons8-automation.svg';



function App() {
  return (
    <Navbar>
      <NavItem icon={<Plus />} />
      <NavItem icon={<Bell />} />
      <NavItem icon={<Message />} />

      <NavItem icon={<Caret />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {/* if 'open' property is true, then show the props.children. If false, then show nothing */}
      { open && props.children }
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main'); // settings, animals
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition 
        in={activeMenu === 'main'} 
        timeout={500}
        classNames="menu-primary"
        unmountOnExit 
        onEnter={calcHeight}>
          <div className="menu">

            <DropdownItem> My Profile</DropdownItem>
            <DropdownItem 
              leftIcon={<Cog />}
              rightIcon={<Cat />}
              goToMenu="settings">
                Settings 
            </DropdownItem>
            <DropdownItem
            leftIcon="🦧"
            rightIcon={<Mountain />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Caret />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<VSCode />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Peace />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Runner />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Texas />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Caret />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
