import React, { Component } from 'react';
import {getPositions} from '../functions/API';

const FormControl = require('react-bootstrap/lib/FormControl');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');

class PositionSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {positions: []};
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(props) {
		if(props.selectedCampaign !== this.props.selectedCampaign) {
			getPositions(props.selectedCampaign).then(positions => {
				if(positions) {
					this.setState({positions: positions});
				}
			});
		}
	}

	handleChange(event) {
		let option = event.target.value;
		if(option !== "default") {
			this.props.positionSelected(option);
		}
	}

  render() {
    return (
        <div className="positionSelect">
        	<ControlLabel>Position</ControlLabel>
        	<FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
        		<option value="default">...</option>
		        {this.state.positions.map((position, index) => 
		      		<option key={index} value={position.position_id} >{ position.name }</option>
		      	)}
		    </FormControl>
        </div>
    );
  }
}

export default PositionSelect;
