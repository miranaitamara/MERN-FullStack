import React, { Component } from 'react';
import {addPosition} from '../functions/API';
import {validatePositionForm} from '../functions/Helper';
import '../styles/component.css';

const Button = require('react-bootstrap/lib/Button');
const Modal = require('react-bootstrap/lib/Modal');
const FormControl = require('react-bootstrap/lib/FormControl');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');
const Alert = require('react-bootstrap/lib/Alert');

class AddPositionModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      name: '',
      start_date: '',
      end_date: '',
      openings: '',
      description: '',
      alert: 'none'
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    if(this.props.selectedCampaign !== "") {
      this.setState({ show: true });
    }
    else {
      this.setState({ alert:'block' });
      setTimeout(function(){
        this.setState({ alert:'none' });
      }
      .bind(this),2000)
    }
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    const name = this.state.name;
    const start_date = this.state.start_date;
    const end_date = this.state.end_date;
    const openings = this.state.openings;
    const description = this.state.description;
    const campaign_id = this.props.selectedCampaign;
    // Check for empty inputs
    if(validatePositionForm(name, start_date, end_date, openings, description)) {
      addPosition(name, start_date, end_date, openings, description, campaign_id);
    }
  }

  render() {
    return (
      <div className="addPositionModal">
        <Button bsSize="small" onClick={this.handleShow}>
          ADD POSITION
        </Button>
        <Alert style={{ display: this.state.alert }} id="positionAlert" bsStyle="danger">
          <strong>Select a Campaign</strong>
        </Alert>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Position</Modal.Title>
          </Modal.Header>

          <form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <div className="form">
                <ControlLabel>Position Name</ControlLabel>
                <FormControl componentClass="input" name="name" value={this.state.name} onChange={this.handleChange} />
                <ControlLabel>End Date</ControlLabel>
                <FormControl componentClass="input" name="end_date" value={this.state.end_date} onChange={this.handleChange} />
                <ControlLabel>Openings</ControlLabel>
                <FormControl componentClass="input" name="openings" value={this.state.openings} onChange={this.handleChange} />
                <ControlLabel>Description</ControlLabel>
                <FormControl componentClass="textArea" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
            </Modal.Body>
        
            <Modal.Footer>
              <Button className="button" bsSize="small" type="submit">Submit</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddPositionModal;