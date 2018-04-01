import React, { Component } from 'react';

async function createApplicant(first_name, last_name, school) {
  return fetch('api/v1/applicants/POST', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      school: school
    })
  })
}

function validateForm(firstName, lastName, school) {
  return (firstName.length > 0 && lastName.length > 0 && school.length > 0);
}

class ApplicantForm extends React.Component {
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
    var firstName = this.state.first_name;
    var lastName = this.state.last_name;
    var school = this.state.school;

    if(validateForm(firstName,lastName,school)) {
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



          // <div>
          //   <label>
          //   First Name:
          //   <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
          // </label>
          // </div>
          // <div>
          //   <label>
          //   Last Name:
          //   <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
          // </label>
          // </div>
          // <div>
          //   <label>
          //     School:
          //     <input type="text" name="school" value={this.state.school} onChange={this.handleChange} />
          //   </label>
          // </div>