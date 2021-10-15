import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'

const ClientAndTableForm = () => {
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Nombre cliente:</Label>
                            <Input disabled type="text" id="clientName" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Mesa:</Label>
                            <Input disabled type="select" id="selectTable">
                                <option>Mesa 1</option>
                                <option>Mesa 2</option>
                                <option>Mesa 3</option>
                                <option>Mesa 4</option>
                                <option>Mesa 5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <hr></hr>
            </Form>
        </div>
    )
}

export default ClientAndTableForm