// AddCampaignModal

export function validateCampaignForm(name) {
  return (name.length > 0);
}

// AddPositionModal

export function validatePositionForm(name, start_date, end_date, openings, description) {
  return (
    name.length > 0 &&
    start_date.length > 0 &&
    end_date.length > 0 && 
    openings.length > 0 &&
    description.length > 0
  );
}

// ApplicantForm

export function validateApplicantForm(firstName, lastName, school, position_id, campaign_id) {
  return (
    firstName.length > 0 &&
    lastName.length > 0 && 
    school.length > 0 && 
    position_id.length > 0 &&
    campaign_id.length > 0
  );
}

// ApplicantTable

export function formatDate(iso) {
  const date = new Date(iso);
  const year = date.getFullYear();
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