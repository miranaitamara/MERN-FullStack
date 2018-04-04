import React, { Component } from 'react';
import {createApplicant} from '../functions/API';
import {validateApplicantForm} from '../functions/Helper';
import '../styles/component.css';

class ApplicantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {first_name: '', last_name: '', school: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    const firstName = this.state.first_name;
    const lastName = this.state.last_name;
    const school = this.state.school;
    // Check for empty inputs
    if(validateApplicantForm(firstName,lastName,school)) {
      createApplicant(firstName, lastName, school);
    }
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="applicantForm">
            <div className="labels">
              <label>
                First Name:
              </label>
              <label>
                Last Name:
              </label>
              <label>
                School:
              </label>
            </div>
            <div className="inputs">
              <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
              <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
              <input type="text" name="school" value={this.state.school} onChange={this.handleChange} />
              <input className="button" type="submit" value="Submit" />
            </div>
          </div>
        </form>
    );
  }
}

export default ApplicantForm;