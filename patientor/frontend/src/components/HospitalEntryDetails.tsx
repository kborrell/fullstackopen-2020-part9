import React from "react";
import { HospitalEntry } from "../types";
import { useStateValue } from "../state";
import { Segment } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const HospitalEntryDetails: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  const [{ diagnoses }] = useStateValue();

  if (!diagnoses) {
    return null;
  }

  return(
    <Segment key={entry.id}>
      <h4>{entry.date} <Icon name="hospital symbol" /></h4>
      <i color="light-grey">{entry.description}</i>
      <ul>
        { entry.diagnosisCodes && entry.diagnosisCodes.map(code => <li key={code}>{code} {diagnoses[code].name}</li>)}
      </ul>
      <p><b>Discharge: </b>({entry.discharge.date}) {entry.discharge.criteria}</p>
    </Segment>
  );
};

export default HospitalEntryDetails;