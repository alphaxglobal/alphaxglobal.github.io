import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import NavBar from "./components/navbar";
import Banner from "./components/banner";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css";

import AboutUs from "./components/about-us";
import Invest from "./components/invest";
import Tokenomics from "./components/tokenomics";
import FAQ from "./components/faq";
import Roadmap from "./components/roadmap";
import Partners from "./components/partners";
import UsefulLinks from "./components/useful-links";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Banner />
    <AboutUs />
    <Invest />
    <Tokenomics />
    <FAQ />
    <Roadmap />
    <Partners />
    <UsefulLinks />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
