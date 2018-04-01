import React, { Component } from 'react';

async function getApplicants() {
    const response = await fetch('/api/v1/applicants/GET');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.response;
}

function formatDate(iso) {
  var date = new Date(iso);
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return(year+'-' + month + '-'+day);
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {applicants: []};
  }

  componentDidMount() {
    getApplicants()
      .then(res => {
        console.log(res);
        var newApplicants = [];
        res.forEach(applicant => {
          newApplicants.push(applicant);
          this.setState({ applicants: newApplicants });
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="applicantList">
        {this.state.applicants.map((applicant,index) => 
          <div key={ index } className="applicant">
            <div id="date">{ formatDate(applicant.date) }</div>
            <div id="name">{ applicant.first_name + " " + applicant.last_name }</div>
            <div id="school">{ applicant.school }</div>
          </div>
        )}
      </div>
    );
  }
}

export default List;