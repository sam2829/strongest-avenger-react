import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import AlertMessage, { useAlert } from "./components/AlertMessage";
import React from "react";

function App() {
  const { alert, showAlert, hideAlert } = useAlert();

  return (
    <div className={styles.App}>
      <NavBar showAlert={showAlert} />
      {alert && (
        <AlertMessage
          variant={alert.variant}
          message={alert.message}
          onClose={hideAlert}
        />
      )}
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route
            exact
            path="/signin"
            render={() => <SignInForm showAlert={showAlert} />}
          />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
