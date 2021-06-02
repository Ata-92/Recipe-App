import { Link } from 'react-router-dom'
import { useState } from "react";
import { Container, Nav, Icon } from "./NavbarStyle";
import { MdMenu } from 'react-icons/md';

const Navbar = () => {

  return (
    <Container>
      <Link to="/">
        {String(`<ata/> `)}
        <span>design</span>
      </Link>
    </Container>
  );
};

export default Navbar;
