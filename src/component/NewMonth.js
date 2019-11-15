import React, { Component } from 'react';

import firebase from "./Firebase/firebase";


class NewMonth extends Component {
    constructor() {
        super();
        this.state = {
            nomMois: "",
        };
    }

    componentWillMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ id_user: user.uid})
          }
        });
          
    }
    

    addMonth = e => {
        const db = firebase.firestore();
        const userRef = db.collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc(this.state.nomMois).set({
            entreemois: "",
            sortiemois: ""
        });  
        this.setState({
            nomMois: "",
        });
    };

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

   render() {
    return (
        <div className="wrapper-menu-burger">
            <label htmlFor="mois">Mois</label>
            <input
                id="mois"
                type="text"
                name="nomMois"
                onChange={this.updateInput}
                value={this.state.sortiemois}
            />
            <button onClick={this.addMonth}>Ajouter un mois</button>            
        </div>
    )
  }
}
export default NewMonth; // Don’t forget to use export default!