import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RevenueForm from '../containers/RevenueForm'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

  render(){
    return (
      <div className="App">
        <Button color="success" onClick={this.toggle}>HELLO INVOLVE ASIA</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Add Revenue Group</ModalHeader>
            <ModalBody>
              <RevenueForm/>
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
       
      </div>
    );
  }
}