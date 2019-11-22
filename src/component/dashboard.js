import React, { Component } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import EnterMonth from "./FormMonth";
import NewMonth from "./ListeMonth";
import DataMonth from "./DataMonth";

AOS.init();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="dashboard">
        <div className="menu-header">
          <div className="logo-wrapper">
            {/* <img className="logo" src={logo} alt="Logo CodeBox"/> */}
            <span>EtatBank</span>
          </div>
          <ul>
            <li
              className={
                this.state.showComponent === "aos" ? "active" : undefined
              }
            >
              <span onClick={() => this._onButtonClick("aos")}>
                Entrée du mois
              </span>
            </li>
          </ul>
        </div>
        <div className="content-element">
          <EnterMonth />
          <NewMonth />
          <DataMonth />
        </div>
      </div>
    );
  }
}
export default Dashboard; // Don’t forget to use export default!
