import React, { Component } from 'react';

import firebase from "./Firebase/firebase";

import { Doughnut } from 'react-chartjs-2';

var dataTest = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


class DataMonth extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            entreemois:'',
            sortiemois: '',
            demoMois: []
        };
    }

    componentDidMount = () => {
        var self = this;
        const db = firebase.firestore();
        const dataMonth = db.collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc("janvier");
        
        dataMonth.get().then(function(doc) {
            if (doc.exists) {

                self.setState(state => {
                    const demoMois = state.demoMois.concat(doc.data().entreemois);
                    return {
                        demoMois,
                    };
                  });

                self.setState({entreemois: doc.data().entreemois});
                self.setState({sortiemois: doc.data().sortiemois});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
          
    }

   
   render() {
    return (
        <div className="wrapper-data-month">
            <h3>Démo data</h3>

            <p>{this.state.entreemois}</p>
            <p>{this.state.sortiemois}</p>

            {this.state.demoMois}

            {/* <Doughnut
                data={dataTest}
                title="My amazing data"
                color="#70CAD1"
            /> */}
            
        </div>
    )
  }
}
export default DataMonth; // Don’t forget to use export default!