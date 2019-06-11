import React, { Component } from 'react';
import Rules from './Rules'
import { Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import '../style/form.scss';


export default class RevenueForm extends Component {

  render(){
    return (
      <>
        <Form onSubmit={this.submitHandler} className="formRevenue">
        
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label className="headerText">Revenue Group Title</Label>
                <Input name="name"  onChange={this.handleEdit} bsSize="sm"/>
              </FormGroup>
            </Col>
          </Row> 

          <Row >
            <Col className="inline" md={12}>
              <p>if </p>
                <FormGroup >
                  <Input type="select" name="select" id="exampleSelect" bsSize="sm">
                    <option>ALL</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              <p> of the below conditions are met</p>
            </Col>
          </Row> 
          
          {/* Rules Component*/}
          <Rules />

            <Row>
              <Col className="inline" md={12}>
                <p>Then revenue is </p>
                <FormGroup >
                  <Input
                    type="number"
                    bsSize="sm"
                    name="sec"
                    onChange={this.handleEdit}
                    id="exampleTime"
                    placeholder="number"
                    // if there any max or min number
                    min="0" max="100"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
      </>
    );
  }
}












