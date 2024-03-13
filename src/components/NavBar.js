import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

export class NavBar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt='logo' height='65'/>
          </Navbar.Brand>
          <Nav.Link className='mr-auto'>
            STRONGEST<br/>AVENGER   
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
              <Nav.Link>
                <i className="fas fa-home"></i>Home
              </Nav.Link>
              <Nav.Link>
                <i className="fas fa-sign-in-alt"></i>Sign in
              </Nav.Link>
              <Nav.Link>
                <i className="fas fa-user-plus"></i>Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar