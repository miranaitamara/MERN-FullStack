import React, { Component } from 'react';
import '../styles/component.css';

const Radio = require('react-bootstrap/lib/Radio');
const Table = require('react-bootstrap/lib/Table');

class PositionTable extends Component {
  constructor(props) {
    super(props);
    this.positionSelected = this.positionSelected.bind(this);
  }

  positionSelected(event) {
    this.props.positionSelected(event.target.value);
  }

  render() {
    return (
        <div>
          <Table className="table" striped condensed hover>
            <thead>
              <tr>
                <th colSpan="4" className="table-header">
                  Positions
                </th>
              </tr>
              <tr>
                <th id="radioCell"></th>
                <th>Position</th>
                <th>Openings</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.positions.map((position,index) => 
                <tr key={index}>
                  <td>
                    <Radio 
                      name="rad" 
                      value={ position.position_id } 
                      onClick={ this.positionSelected }>
                    </Radio>
                  </td>
                  <td id="position" value={ position.name }>{ position.name}</td>
                  <td id="openings">{ position.openings }</td>
                  <td id="status">{ position.status }</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
    );
  }
}

export default PositionTable;