// AddCampaignModal

export async function addCampaign(name) {
  console.log(`posting ${name}`)
  return fetch('api/v1/campaigns/POST', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name
    })
  })
  .then(function(res, err) {
    console.log(res);
    console.log(err);
  })
}

// AddPositionModal

export async function addPosition(name, start_date, end_date, openings, campaign_id) {
  try {
    const response = await fetch('api/v1/positions/POST', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        start_date: start_date,
        end_date: end_date,
        openings: openings,
        campaign_id: campaign_id
      })
    });
  }
  catch(err) {
    console.log(err);
  }
}

// ApplicantForm

export async function createApplicant(first_name, last_name, school) {
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
  });
}

// ApplicantTable

export async function getApplicants(selectedPosition) {
  try{
    const response = await fetch(`/api/v1/applicants/${selectedPosition}`);
    const body = await response.json();
    if(response.status !== 200) {
      console.log(Error(body.message));
    }
    return body.response;
  }
  catch(err) {
    console.log(err);
  }
}

// CampaignSelect

export async function getCampaigns() {
  try{
    const response = await fetch('/api/v1/campaigns/GET');
    const body = await response.json();
    if(response.status !== 200) {
      console.log(Error(body.message));
    }
    return body.response;
  }
  catch(err) {
    console.log(err);
  };
}

// Home

export async function getPositions(campaign) {
  try {
    const response = await fetch(`/api/v1/positions/${campaign}`);
    const body = await response.json();
    if(body.status !== 200) throw Error(body.message);
    return body.response;
  }
  catch(err) {
    console.log(err);
  }
}