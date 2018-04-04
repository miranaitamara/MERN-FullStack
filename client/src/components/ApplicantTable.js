import React, { Component } from 'react';
import '../styles/component.css';
import {formatDate} from '../functions/Helper';

const Table = require('react-bootstrap/lib/Table');

class ApplicantTable extends Component {
  render() {
    return (
      <div>
        <Table striped condensed hover className="applicant-table">
          <thead>
            <tr>
              <th colSpan="3" className="table-header">
                Applicants
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {this.props.applicants.map((applicant,index) => 
              <tr key={index}>
                <td id="name">{ applicant.first_name + " " + applicant.last_name }</td>
                <td id="school">{ applicant.school }</td>
                <td id="date">{ formatDate(applicant.date_applied) }</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ApplicantTable;