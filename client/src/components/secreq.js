import React, { Component } from 'react';
import {getSecreq} from '../functions/API';
const Table = require('react-bootstrap/lib/Table');
const FormControl = require('react-bootstrap/lib/FormControl');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');

class SecreqSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {secreq: [], show: false};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		getSecreq().then(secreq => {
			if(secreq) {
				this.setState({secreq});
			}
		});
	}

	handleChange(event) {
		let option = event.target.value;
		
	 if(option === "default") {
			option = "";
		}
		//this.props.campaignSelected(option);
	}

	handleClose(show) {
		this.setState({ show:false });
	}

  render() {
    return (
        <div>
        <Table striped condensed hover className="applicant-table">
          <thead>
            <tr>
              <th colSpan="3" className="table-header">
               keymeasures
              </th>
            </tr>
            <tr>
              <th>INFO</th>
              <th>CodeClasse</th>
              <th>Descriptions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.secreq.map((securityrequirement,index) => 
              <tr key={index}>
                <td id="info">{ securityrequirement.INFO }</td>
                <td id="codeclasse">{ securityrequirement.CODE_SECREQ }</td>
                <td id="descrp">{ securityrequirement.DESCP_SECREQ }</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SecreqSelect;

// <option value="add">Add Campaign</option>
