import React from "react";
import { HealthCheckEntry, HealthCheckRating } from "../types";
import { useStateValue } from "../state";
import { Segment, SemanticCOLORS } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const HealthCheckEntryDetails: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  const [{ diagnoses }] = useStateValue();

  if (!diagnoses) {
    return null;
  }
  
  const getIconColor = (rating: HealthCheckRating): SemanticCOLORS => {
    switch(rating) {
      case HealthCheckRating.Healthy:
        return "green";
      case HealthCheckRating.LowRisk:
        return "yellow";
      case HealthCheckRating.HighRisk:
        return "orange";
      case HealthCheckRating.CriticalRisk:
        return "red";
    }
  };

  return(
    <Segment key={entry.id}>
      <h4>{entry.date} <Icon name="user md" size="big" /></h4>
      <i color="light-grey">{entry.description}</i>
      <p><Icon name="heart" color={ getIconColor(entry.healthCheckRating) } /></p>
      { entry.diagnosisCodes && 
        <ul>
          { entry.diagnosisCodes && entry.diagnosisCodes.map(code => <li key={code}>{code} {diagnoses[code].name}</li>)}
        </ul>
      }
    </Segment>
  );
};

export default HealthCheckEntryDetails;