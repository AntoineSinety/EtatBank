import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';


class NewMonth extends Component {
    constructor() {
        super();
        this.state = {
            listMonth: [],
            dataState: {
                labels: ["Entrée", "Sortie"],
                datasets: [
                    {
                        data: ["10", "10"],
                        backgroundColor: ["#5ac492", "#d6535d"],
                        hoverBackgroundColor: ["#5ac492", "#d6535d"]
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
            .then(function (querySnapshot) {
                let listMonth = [];
                querySnapshot.forEach(doc => {
                    listMonth.push(doc.id);
                    self.setState({
                        listMonth: listMonth
                    });
                });
            })
            .catch(function (error) {
                console.log("Error getting document:", error);
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
            .then(function (doc) {
                if (doc.exists) {
                    let newState = Object.assign({}, self.state);
                    newState.dataState.datasets[0].data = [doc.data().entreemois, doc.data().sortiemois];
                    self.setState(newState);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch(function (error) {
                console.log("Error getting document:", error);
            });
    }

    render() {
        return (
            <div className="wrapper-new-month">
                <ul className="list-mois">
                    {this.state.listMonth.map(function (name, index) {
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
                <Doughnut
                    data={this.state.dataState}
                    title="My amazing data"
                    color="#70CAD1"
                    redraw
                    options={{ plugins: { datalabels: { display: true, color: 'white' } } }}
                />
            </div>
        );
    }
}

export default NewMonth; // Don’t forget to use export default!
