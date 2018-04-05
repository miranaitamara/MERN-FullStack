import React, { Component } from 'react';
import '../styles/Position.css';
import {formatDate} from '../functions/Helper';
import {getApplicants} from '../functions/API';
import ApplicantTable from '../components/ApplicantTable';
import AddApplicantModal from '../components/AddApplicantModal';

const PageHeader = require('react-bootstrap/lib/PageHeader');
const Panel = require('react-bootstrap/lib/Panel');
const Button = require('react-bootstrap/lib/Button');
const ButtonGroup = require('react-bootstrap/lib/ButtonGroup');

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = { position: {}, applicants: [] };
  }

  componentWillMount() {
    const position = this.props.location.state;
    getApplicants( position.position_id ).then(applicants => {
      this.setState({ position: position, applicants: applicants });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
        <div className="position"> 
          <PageHeader>
             {this.state.position.name} <small>Summer 2018</small>
          </PageHeader>
          <ButtonGroup>
            <Button>Edit</Button>
            <Button>Comment</Button>
            <Button bsStyle="danger">Delete</Button>
          </ButtonGroup>
          <div>
            <div className="cell0">
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3"><b>Information</b></Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <p><b>Start Date:</b> { formatDate(this.state.position.start_date) }</p>
                  <p><b>End Date:</b> { formatDate(this.state.position.end_date) }</p>
                  <p><b>Openings:</b> { this.state.position.openings }</p>
                </Panel.Body>
              </Panel>
            </div>
            <div className="cell1">
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">
                    <b>Description</b>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <p>{ this.state.position.description }</p>
                </Panel.Body>
              </Panel>
            </div>
            <AddApplicantModal />
            <div className="applicantTable">
              <ApplicantTable applicants={ this.state.applicants }/>
            </div>
          </div>
        </div>
    );
  }
}

export default Position;
