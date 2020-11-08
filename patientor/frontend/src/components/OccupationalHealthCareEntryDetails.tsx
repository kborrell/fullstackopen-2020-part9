import React from "react";
import { OccupationalHealthcareEntry } from "../types";
import { useStateValue } from "../state";
import { Segment } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const OccupationalHealthCareEntryDetails: React.FC<{ entry: OccupationalHealthcareEntry }> = ({ entry }) => {
  const [{ diagnoses }] = useStateValue();

  if (!diagnoses) {
    return null;
  }

  return(
    <Segment key={entry.id}>
      <h4>{entry.date} <Icon name="stethoscope" size="large" /> {entry.employerName}</h4>
      <p>{entry.specialist}</p>
      <i color="light-grey">{entry.description}</i>
      <ul>
        { entry.diagnosisCodes && entry.diagnosisCodes.map(code => <li key={code}>{code} {diagnoses[code].name}</li>)}
      </ul>
      { entry.sickLeave && 
        <div>
          <h5>Sick leave</h5>
          <p>From: { entry.sickLeave.startDate }</p>
          <p>To: { entry.sickLeave.endDate }</p>
        </div>
      }
    </Segment>
  );
};

export default OccupationalHealthCareEntryDetails;