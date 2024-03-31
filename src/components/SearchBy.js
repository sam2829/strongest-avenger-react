import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "../styles/SearchBy.module.css";
import appStyles from "../App.module.css";
import Asset from "./Asset";

const SearchBy = ({ mobile }) => {
  return (
    <Container
      className={`${appStyles.Content} ${styles.SearchByContainer} ${
        mobile && "d-lg-none text-center"
      }`}
    >
      {/* Container for header */}
      <Container className={styles.SearchByHeader}>
        <p>Search by:</p>
      </Container>
      {/* Render profiles */}
      <Container
        className={`d-flex ${mobile ? "justify-content-around" : "flex-column"}`}
      >
        <div className={`${mobile ? "mb-2" : "my-3"}`}>
          <Link className={styles.SearchByLinks}>
            <span>Avenger</span>
          </Link>
        </div>
        <div className={`${mobile ? "mb-2 px-2" : "my-3"}`}>
          <Link className={styles.SearchByLinks}>
            <span>X-Men</span>
          </Link>
        </div>
        <div className={`${mobile ? "mb-2 px-2" : "my-3"}`}>
          <Link className={styles.SearchByLinks}>
            <span>Anti-hero</span>
          </Link>
        </div>
        <div className={`${mobile ? "mb-2" : "my-3"}`}>
          <Link className={styles.SearchByLinks}>
            <span>Villain</span>
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default SearchBy;
