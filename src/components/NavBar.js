import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import LoggedInIcons from "./LoggedInNavIcons";
import LoggedOutIcons from "./LoggedOutNavIcons";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  // The add posy icon in navbar
  const addPostIcon = (
    <NavLink activeClassName={styles.Active} to="/posts/create">
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );

  return (
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
        {currentUser && addPostIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact activeClassName={styles.Active} to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? (
              <LoggedInIcons
                currentUser={currentUser}
                handleSignOut={handleSignOut}
              />
            ) : (
              <LoggedOutIcons />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
