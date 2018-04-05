import React, { Component } from 'react';
import CampaignSelect from './CampaignSelect';
import PositionSelect from './PositionSelect';
import {addApplicant} from '../functions/API';
import {validateApplicantForm} from '../functions/Helper';

const Button = require('react-bootstrap/lib/Button');
const Modal = require('react-bootstrap/lib/Modal');
const FormControl = require('react-bootstrap/lib/FormControl');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');

class AddApplicantModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      first_name: '',
      last_name: '',
      school: '',
      selectedPosition: '',
      selectedCampaign: '',
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
      this.setState({ show: true });
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const school = this.state.school;
    const campaign_id = this.state.selectedCampaign;
    const position_id = this.state.selectedPosition;
    // Check for empty inputs
    if(validateApplicantForm(first_name, last_name, school, campaign_id, position_id)) {
      addApplicant(first_name, last_name, school, campaign_id, position_id);
    }
  }

  positionSelected(selectedPosition) {
    this.setState({ selectedPosition:selectedPosition });
  }

  campaignSelected(selectedCampaign) {
    this.setState({ selectedCampaign:selectedCampaign });
  }

  render() {
    return (
      <div className="addApplicantModal">
        <Button bsSize="small" onClick={this.handleShow}>
          ADD APPLICANT
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Applicant</Modal.Title>
          </Modal.Header>

          <form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <div className="form">
                <CampaignSelect 
                  campaignSelected={ (selectedCampaign) => this.campaignSelected(selectedCampaign) }
                />
                <PositionSelect 
                  selectedCampaign={ this.state.selectedCampaign }
                  positionSelected={ (selectedPosition) => this.positionSelected(selectedPosition) } 
                />
                <ControlLabel>First Name</ControlLabel>
                <FormControl componentClass="input" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                <ControlLabel>Last Name</ControlLabel>
                <FormControl componentClass="input" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                <ControlLabel>School</ControlLabel>
                <FormControl componentClass="input" name="school" value={this.state.school} onChange={this.handleChange} />
                <ControlLabel>Upload File</ControlLabel>
                <FormControl type="file" />
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

export default AddApplicantModal;