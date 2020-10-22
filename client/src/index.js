import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'

import "./index.scss";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
<Router>
<App />
<Footer />
</Router>
, document.getElementById("root"));
// registerServiceWorker();

// 10/05/20 Claudiu - service worker to be reactivated before deployment; 
