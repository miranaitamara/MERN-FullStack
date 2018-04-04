import React, { Component } from 'react';
import AddCampaignModal from './AddCampaignModal';
import {getCampaigns} from '../functions/API';

const FormControl = require('react-bootstrap/lib/FormControl');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');

class CampaignSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {campaigns: [], show: false};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		getCampaigns().then(campaigns => {
			if(campaigns) {
				this.setState({campaigns: campaigns});
			}
		});
	}

	handleChange(event) {
		let option = event.target.value;
		if(option === "add") {
			this.setState({ show:true })
			option = "";
		} 
		else if(option === "default") {
			option = "";
		}
		this.props.campaignSelected(option);
	}

	handleClose(show) {
		this.setState({ show:false });
	}

  render() {
    return (
        <div className="home">
        	<ControlLabel>Campaign</ControlLabel>
        	<FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
        		<option value="default">...</option>
        		<option value="add">Add Campaign</option>
		        {this.state.campaigns.map((campaign, index) => 
		      		<option key={index} value={campaign.campaign_id} >{ campaign.name }</option>
		      	)}
		    </FormControl>
		    <AddCampaignModal show={ this.state.show } handleClose={ show => this.handleClose(show) } />
        </div>
    );
  }
}

export default CampaignSelect;
