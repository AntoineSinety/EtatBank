import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { Doughnut, Line } from "react-chartjs-2";


class GraphYear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: [],
            dataMonth: [],
            dataYearEntree: [],
            dataYearSortie: []
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
                let dataMonth = [];
                var yearEntree= [];
                var yearSortie= [];

                querySnapshot.forEach(function(doc) {
                    dataMonth.push([
                        doc.id,
                        doc.data().entreemois,
                        doc.data().sortiemois
                    ]);
                    self.setState({
                        dataMonth: dataMonth
                    });
                    // console.log(self.state.dataMonth);

                    if (doc.data().entreemois > 0) {
                        yearEntree.push(parseInt(doc.data().entreemois));
                    } else {
                        yearEntree.push(0);
                    }
                    if (doc.data().sortiemois > 0) {
                        yearSortie.push(parseInt(doc.data().sortiemois));
                    } else {
                        yearSortie.push(0);
                    }
                    self.setState({
                        dataYearEntree: yearEntree,
                        dataYearSortie: yearSortie
                    });
                });
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    };

    render() {
        return (
            <div className="wrapper-data-month">
                <h3>Graph de l'année</h3>

                <Line
                    redraw
                    data={{
                        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                        datasets: [
                            {
                                label: "Entrée",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(67, 233, 70,0.4)",
                                borderColor: "rgba(67, 233, 70,1)",
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: "miter",
                                pointBorderColor: "rgba(67, 233, 70,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(67, 233, 70,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: this.state.dataYearEntree
                            },
                            {
                                label: "Sortie",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(233, 67, 67,0.7)",
                                borderColor: "rgba(233, 67, 67,1)",
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: "miter",
                                pointBorderColor: "rgba(233, 67, 67,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(233, 67, 67,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: this.state.dataYearSortie
                            }
                        ]
                    }}
                    width={800}
                    height={300}
                    options={{
                        // maintainAspectRatio: true,
                        pointBorderColor  : "#FFFFFF",

                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        min: 0,
                                        // max: 2000
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        );
    }
}
export default GraphYear; // Don’t forget to use export default!
