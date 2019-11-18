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



    componentDidMount = () => {

          
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    updateStatsMonth = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc("janvier").set({
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