import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { Doughnut, Line } from "react-chartjs-2";

class TotalCompte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalGain: 0,
            totalLose: 0,
            totalEco: 0
        };
    }

    componentDidMount = () => {
        var self = this;
        const db = firebase.firestore();
        const dataYear = db
            .collection("users")
            .doc("antoine")
            .collection("years")
            .doc("2019")
            .collection("mois")
            .orderBy("order", "asc");

        dataYear
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    if (parseInt(doc.data().entreemois) > 0) {
                        self.setState({
                            totalGain:
                                self.state.totalGain +
                                parseInt(doc.data().entreemois)
                        });
                    }
                    if (parseInt(doc.data().sortiemois) > 0) {
                        self.setState({
                            totalLose:
                                self.state.totalLose +
                                parseInt(doc.data().sortiemois)
                        });
                    }
                    self.setState({
                        totalEco: self.state.totalGain - self.state.totalLose
                    });
                    console.log(
                        "self",
                        self.state.totalGain + parseInt(doc.data().entreemois)
                    );
                });
                console.log(self.state);
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    };

    render() {
        return (
            <div className="wrapper-total-compte">
                <h3>Statistique de l'année</h3>

                <div className="card-total">
                    <h5>Total gagné</h5>
                    <p>{Intl.NumberFormat().format(this.state.totalGain)}€</p>
                </div>
                <div className="card-total">
                    <h5>Total dépensé</h5>
                    <p>{Intl.NumberFormat().format(this.state.totalLose)}€</p>
                </div>
                <div className="card-total">
                    <h5>Total économisé</h5>
                    <p>{Intl.NumberFormat().format(this.state.totalEco)}€</p>
                </div>
            </div>
        );
    }
}
export default TotalCompte; // Don’t forget to use export default!
