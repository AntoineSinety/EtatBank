import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { Table } from "react-bootstrap";

class DetailsAnnee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsAnnee: []
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

        let monthDetails = [];
        dataYear
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    monthDetails.push({
                        mois: doc.id,
                        entree: doc.data().entreemois,
                        sortie: doc.data().sortiemois
                    });
                    // console.log(monthDetails);

                    // this.setState({ detailsAnnee: monthDetails });
                    self.setState(previousState => ({
                        detailsAnnee: [
                            ...previousState.detailsAnnee,
                            monthDetails
                        ]
                    }));
                });
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    };

    // mapMonthRender() {
    //     this.state.detailsAnnee.map(function(item, i) {
    //         return (
    //             <tr>
    //                 <td>1</td>
    //                 <td>{item.mois}</td>
    //                 <td>{item.entree}</td>
    //                 <td>{item.sortie}</td>
    //             </tr>
    //         );
    //     });
    // }

    render() {
        return (
            <div className="wrapper-month-details">
                <h3>Statistique de l'année</h3>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mois</th>
                            <th>Entée</th>
                            <th>Sortie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.detailsAnnee.map(function(item, i) {
                            return (
                                <tr>
                                    <td>{i}</td>
                                    <td>{item[i].mois}</td>
                                    <td>{Intl.NumberFormat().format(item[i].entree)}</td>
                                    <td>{Intl.NumberFormat().format(item[i].sortie)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default DetailsAnnee; // Don’t forget to use export default!
