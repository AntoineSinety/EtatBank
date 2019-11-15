import React, { Component } from 'react';

import firebase from "./Firebase/firebase";


class DataMonth extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            entreemois:'',
            sortiemois: ''
        };
    }

    componentWillMount = () => {
        var self = this;
        const db = firebase.firestore();
        const dataMonth = db.collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc("janvier");
        
        dataMonth.get().then(function(doc) {
            if (doc.exists) {
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
        <div className="data-month">
            <h3>Démo data</h3>

            <p>{this.state.entreemois}</p>
            <p>{this.state.sortiemois}</p>
            
        </div>
    )
  }
}
export default DataMonth; // Don’t forget to use export default!