import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { Doughnut } from "react-chartjs-2";

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

class GraphYear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: [],
            dataMonth: []
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

        dataYear
            .get()
            .then(function(querySnapshot) {
                let dataMonth = [];
                querySnapshot.forEach(function(doc) {
                    dataMonth.push([doc.id, doc.data().entreemois, doc.data().sortiemois]);
                    self.setState({
                        dataMonth: dataMonth
                    });
                    console.log(self.state.dataMonth);
                });
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    };

    render() {
        return (
            <div className="wrapper-data-month">
                <h3>Démo data</h3>


            </div>
        );
    }
}
export default GraphYear; // Don’t forget to use export default!
