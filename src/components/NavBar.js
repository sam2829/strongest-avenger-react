import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export class NavBar extends Component {
  render() {
    return (
      <CurrentUserContext.Consumer>
        {(currentUser) => (
          <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
              <NavLink to="/">
                <Navbar.Brand>
                  <img src={logo} alt="logo" height="65" />
                </Navbar.Brand>
              </NavLink>
              <NavLink className="mr-auto" to="/">
                STRONGEST
                <br />
                AVENGER
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                  <NavLink exact to="/" activeClassName={styles.Active}>
                    <i className="fas fa-home"></i>Home
                  </NavLink>
                  {currentUser ? (
                    <>
                      {/* Display logged-in user options */}
                      <NavLink to="/" activeClassName={styles.Active}>
                        <i className="fa-solid fa-bars"></i>Feed
                      </NavLink>
                      <NavLink to="/" activeClassName={styles.Active}>
                        <i className="fa-solid fa-heart"></i>Liked
                      </NavLink>
                      <NavLink to="/" activeClassName={styles.Active}>
                        <i className="fa-solid fa-right-from-bracket"></i>Sign
                        out
                      </NavLink>
                      <span>{currentUser.username}</span>
                      <NavLink to="/" activeClassName={styles.Active}>
                        <i className=""></i>Profile
                      </NavLink>
                    </>
                  ) : (
                    <>
                      {/* Display logged-out user options */}
                      <NavLink to="/signin" activeClassName={styles.Active}>
                        <i className="fas fa-sign-in-alt"></i>Sign in
                      </NavLink>
                      <NavLink to="/signup" activeClassName={styles.Active}>
                        <i className="fas fa-user-plus"></i>Sign up
                      </NavLink>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
      </CurrentUserContext.Consumer>
    );
  }
}

export default NavBar;
