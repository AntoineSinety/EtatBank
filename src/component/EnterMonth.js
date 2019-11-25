import React, { Component } from "react";

import firebase from "./Firebase/firebase";

import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

class EnterMonth extends Component {
    constructor() {
        super();
        this.state = {
            entreemois: "",
            sortiemois: "",
            currentMonth: ""
        };
    }

    componentDidMount = () => {};

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    };
    updateStatsMonth = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("users")
            .doc("antoine")
            .collection("years")
            .doc("2019")
            .collection("mois")
            .doc(this.state.currentMonth)
            .update({
                entreemois: this.state.entreemois,
                sortiemois: this.state.sortiemois
            });
        this.setState({
            entreemois: "",
            sortiemois: ""
        });
    };

    render() {
        return (
            <div className="wrapper-stats-month">
                <h3>Nouvelles données :</h3>

                <Form className="form-test" onSubmit={this.updateStatsMonth}>
                    <Row>
                        <Col>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        Mois
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    as="select"
                                    name="currentMonth"
                                    id="month-select"
                                    onChange={this.updateInput}
                                >
                                    <option value="Janvier">Janvier</option>
                                    <option value="Février">Février</option>
                                    <option value="Mars">Mars</option>
                                    <option value="Avril">Avril</option>
                                    <option value="Mai">Mai</option>
                                    <option value="Juin">Juin</option>
                                    <option value="Juillet">Juillet</option>
                                    <option value="Août">Août</option>
                                    <option value="Septembre">Septembre</option>
                                    <option value="Octobre">Octobre</option>
                                    <option value="Novembre">Novembre</option>
                                    <option value="Décembre">Décembre</option>
                                </Form.Control>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Entrée du mois"
                                    onChange={this.updateInput}
                                    value={this.state.entreemois}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="inputGroupAppend">
                                        €
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Sortie du mois"
                                    onChange={this.updateInput}
                                    value={this.state.sortiemois}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="inputGroupAppend">
                                        €
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col>
                            <Button variant="success" type="submit">
                                Envoyer
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}
export default EnterMonth; // Don’t forget to use export default!
