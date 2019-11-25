import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { ButtonToolbar, Button } from "react-bootstrap";


import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

class NewMonth extends Component {
    constructor() {
        super();
        this.state = {
            listMonth: [],
            dataState: {
                labels: ["Entrée", "Sortie"],
                datasets: [
                    {
                        data: [],
                        backgroundColor: ["#5ac492", "#d6535d"],
                        hoverBackgroundColor: ["#5ac492", "#d6535d"]
                    }
                ]
            }
        };
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

    displayDataMonth(month) {
        this.setState({currentMonth: month});


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
                    newState.dataState.datasets[0].data = [
                        doc.data().entreemois,
                        doc.data().sortiemois
                    ];
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
                <ButtonToolbar>
                    <ul className="list-mois">
                        {this.state.listMonth.map(function(name, index) {
                            return (
                                <li key={index}>
                                    <Button
                                        variant="secondary"
                                        className={(this.state.currentMonth === name) ? "btn-success" : null}
                                        onClick={() => {
                                            this.displayDataMonth(name);
                                        }}
                                    >
                                        {name}
                                    </Button>
                                </li>
                            );
                        }, this)}
                    </ul>
                </ButtonToolbar>
                <Doughnut
                    data={this.state.dataState}
                    title="My amazing data"
                    color="#70CAD1"
                    redraw
                    options={{
                        plugins: {
                            datalabels: { display: true, color: "white" }
                        }
                    }}
                />
            </div>
        );
    }
}

export default NewMonth; // Don’t forget to use export default!
