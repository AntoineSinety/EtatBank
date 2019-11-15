import React, { Component } from 'react';

import firebase from "./Firebase/firebase";


class EnterMonth extends Component {
    constructor() {
        super();
        this.state = {
         entreemois: "",
         sortiemois: ""
        };
    }

    componentWillMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ id_user: user.uid})
          }
        });
          
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    updateStatsMonth = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc("janvier").set({
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
        <div className="wrapper-menu-burger">
            <h1 data-aos="slide-right">Entrée du mois</h1>

            <form onSubmit={this.updateStatsMonth}>
                <label htmlFor="entreemois">Entrée du mois</label>
                <input
                    id="entreemois"
                    type="text"
                    name="entreemois"
                    onChange={this.updateInput}
                    value={this.state.entreemois}
                />
                <label htmlFor="sortiemois">Sortie du mois</label>
                <input
                    id="sortiemois"
                    type="text"
                    name="sortiemois"
                    onChange={this.updateInput}
                    value={this.state.sortiemois}
                />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
  }
}
export default EnterMonth; // Don’t forget to use export default!