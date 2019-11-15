import React, { Component } from 'react';

import firebase from "./Firebase/firebase";


class NewMonth extends Component {
    constructor() {
        super();
        this.state = {
            nomMois: "",
            listMonth: []
        };
    }

    componentDidMount = () => {
        var self = this;

        const db = firebase.firestore();
        const dataMonth = db.collection("users").doc("antoine").collection("years").doc("2019").collection("mois");
        
        dataMonth.get()
        .then(function(querySnapshot) {
            let listMonth = [];
            querySnapshot.forEach(doc =>
                listMonth.push(doc.id )
            );
            self.setState({
                listMonth: listMonth.reverse(),
            });
            console.log(self.state.listMonth);
        })
        .catch(function(error) {
            console.log("Error getting document:", error);
        });

          
    }
    

    addMonth = e => {
        const db = firebase.firestore();
        db.collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc(this.state.nomMois).set({
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
            <ul>
                {this.state.listMonth.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                })}
            </ul>
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