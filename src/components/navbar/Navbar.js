import { Link } from 'react-router-dom'
import { useState } from "react";
import { Container, Nav, Icon } from "./NavbarStyle";
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  function handleClick() {
    setHamburger(!hamburger);
  }

  return (
    <Container>
      <Link to="/">
        {String(`<ata/> `)}
        <span>design</span>
      </Link>
      <Nav hamburger={hamburger}>
        <Link to="/about"><span>A</span>BOUT</Link>
        <Link to={{pathname: "https://github.com/Ata-92"}} target="_blank" rel="noopener noreferrer"><span>G</span>ITHUB</Link>
        <Link to="/login"><span>L</span>OGOUT</Link>
      </Nav>
      <Icon onClick={handleClick}><MdMenu /></Icon>
    </Container>
  );
};

export default Navbar;
