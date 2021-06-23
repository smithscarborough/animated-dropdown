import React from 'react';
import { ReactComponent as Caret } from './icons/icons8-expand-arrow (1).svg';
import { ReactComponent as VSCode } from './icons/icons8-visual-studio-code-2019.svg';
import { ReactComponent as Texas } from './icons/icons8-texas.svg';
import { ReactComponent as Runner } from './icons/icons8-sports-mode.svg';



function App() {
  return (
    <Navbar>
      <NavItem icon={<Caret />} />
      <NavItem icon={<VSCode />} />
      <NavItem icon={<Texas />} />
      <NavItem icon={<Runner />} />
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
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
