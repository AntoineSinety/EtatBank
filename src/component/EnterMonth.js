import React, { Component } from "react";

import firebase from "./Firebase/firebase";

class EnterMonth extends Component {
  constructor() {
    super();
    this.state = {
      entreemois: "",
      sortiemois: "",
      currentMonth: ''
    };
  }

  componentDidMount = () => { };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  };
  updateStatsMonth = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("users")
      .doc("antoine")
      .collection("years")
      .doc("2019")
      .collection("mois")
      .doc(this.state.currentMonth)
      .update({
        entreemois: this.state.entreemois,
        sortiemois: this.state.sortiemois
      });
    this.setState({
      entreemois: "",
      sortiemois: ""
    });
  };

  render() {
    return (
      <div className="wrapper-stats-month">

        <form onSubmit={this.updateStatsMonth}>

          <h3>Saisissez  vos données pour le mois de {this.state.currentMonth}</h3>

          <label htmlFor="month-select">Mois à rentrer</label>

          <select name="currentMonth" id="month-select" onChange={this.updateInput}>
              <option value="">-- Sélectionner un mois--</option>
              <option value="Janvier">Janvier</option>
              <option value="Février">Février</option>
              <option value="Mars">Mars</option>
              <option value="Avril">Avril</option>
              <option value="Mai">Mai</option>
              <option value="Juin">Juin</option>
              <option value="Juillet">Juillet</option>
              <option value="Août">Août</option>
              <option value="Septembre">Septembre</option>
              <option value="Octobre">Octobre</option>
              <option value="Novembre">Novembre</option>
              <option value="Décembre">Décembre</option>
          </select>


          <div>
            <label htmlFor="entreemois">Entrée du mois</label>
            <input
              id="entreemois"
              type="text"
              name="entreemois"
              onChange={this.updateInput}
              value={this.state.entreemois}
            />
          </div>
          <div>
            <label htmlFor="sortiemois">Sortie du mois</label>
            <input
              id="sortiemois"
              type="text"
              name="sortiemois"
              onChange={this.updateInput}
              value={this.state.sortiemois}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default EnterMonth; // Don’t forget to use export default!
