import React, { Component } from 'react';
import {addCampaign} from '../functions/API';
import {validateCampaignForm} from '../functions/Helper';
import '../styles/component.css';

const Button = require('react-bootstrap/lib/Button');
const Modal = require('react-bootstrap/lib/Modal');
const FormControl = require('react-bootstrap/lib/FormControl');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');

class AddCampaignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { name: '', show: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShow() {
      this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show:false });
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    const name = this.state.name;
    // Check for empty inputs
    if(validateCampaignForm(name)) {
      addCampaign(name);
    }
  }

  render() {
    return (
      <div className="addCampaignModal">
        <Button className="addButton" bsSize="small" onClick={this.handleShow}>
          ADD CAMPAIGN
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Campaign</Modal.Title>
          </Modal.Header>

          <form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <div className="form">
                <ControlLabel>Campaign Name</ControlLabel>
                <FormControl componentClass="input" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
            </Modal.Body>
        
            <Modal.Footer>
              <Button className="submitButton" bsSize="small" type="submit">Submit</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddCampaignModal;