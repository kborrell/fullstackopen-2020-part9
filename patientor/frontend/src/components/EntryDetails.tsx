import React from 'react';
import HospitalEntryDetails from './HospitalEntryDetails';
import OccupationalHealthCareEntryDetails from './OccupationalHealthCareEntryDetails';
import HealthCheckEntryDetails from './HealthCheckEntryDetails';
import { Entry } from '../types';

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch(entry.type) {
    case "Hospital":
      return <HospitalEntryDetails entry={ entry } />;
    case "OccupationalHealthcare":
      return <OccupationalHealthCareEntryDetails entry={ entry } />;
    case "HealthCheck":
      return <HealthCheckEntryDetails entry={ entry } />;
    default:
      return assertNever(entry);
  };
};

export default EntryDetails;