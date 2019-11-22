import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';

var dataTest = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
    ]
};

class NewMonth extends Component {
    constructor() {
        super();
        this.state = {
            listMonth: [],
            dataState: {
                labels: ["Red", "Green"],
                datasets: [
                    {
                        data: ["10", "10"],
                        backgroundColor: ["#FF6384", "#36A2EB"],
                        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
                    }
                ]
            }
        };

        // this.displayDataMonth = this.displayDataMonth.bind(this);
    }

    componentDidMount = () => {
        var self = this;

        const db = firebase.firestore();
        const dataMonth = db
            .collection("users")
            .doc("antoine")
            .collection("years")
            .doc("2019")
            .collection("mois")
            .orderBy("order", "asc");

        dataMonth
            .get()
            .then(function(querySnapshot) {
                let listMonth = [];
                querySnapshot.forEach(doc => {
                    listMonth.push(doc.id);
                    self.setState({
                        listMonth: listMonth
                    });
                });
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    };

    addMonth = e => {
        const db = firebase.firestore();
        db.collection("users")
            .doc("antoine")
            .collection("years")
            .doc("2019")
            .collection("mois")
            .doc(this.state.nomMois)
            .set({
                entreemois: "",
                sortiemois: ""
            });
        this.setState({
            nomMois: ""
        });
    };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    displayDataMonth(month) {
        var self = this;
        const db = firebase.firestore();
        const dataMonth = db
            .collection("users")
            .doc("antoine")
            .collection("years")
            .doc("2019")
            .collection("mois")
            .doc(month);

        dataMonth
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    let newState = Object.assign({}, self.state);
                    newState.dataState.datasets[0].data = [doc.data().entreemois,doc.data().sortiemois];
                    self.setState(newState);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    }

    render() {
        return (
            <div className="wrapper-new-month">
                <ul className="list-mois">
                    {this.state.listMonth.map(function(name, index) {
                        return (
                            <li key={index}>
                                <button
                                    onClick={() => {
                                        this.displayDataMonth(name);
                                    }}
                                >
                                    {name}
                                </button>
                            </li>
                        );
                    }, this)}
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
                {this.state.entreemois}

                <Doughnut
                    data={this.state.dataState}
                    title="My amazing data"
                    color="#70CAD1"
                    redraw
                    options={{plugins: {datalabels: {display: true, color: 'white' }}}}
                />
            </div>
        );
    }
}

export default NewMonth; // Don’t forget to use export default!
