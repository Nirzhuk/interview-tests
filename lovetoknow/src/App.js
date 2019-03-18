import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './containers/HomePage/'
import ResultsPage from './containers/ResultsPage/'

const App = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
      </>
    </Router>
  );
}


export default App;