import React from "react";
import axios from "axios";
import { Gender, Patient } from "../types";
import { apiBaseUrl } from "../constants";
import { setPatientDetails, useStateValue } from "../state";
import { useParams } from "react-router-dom";
import { Icon, SemanticICONS } from 'semantic-ui-react';
import Entry from '../components/EntryDetails';

const PatientDetails: React.FC = () => {
  const [{ patientDetails }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${ id }`
        );
        dispatch(setPatientDetails(patientFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    fetchPatientDetails();
  }, [dispatch, id]);

  const getPatientIcon = (gender: Gender): SemanticICONS => {
    switch(gender) {
      case Gender.Male:
        return "mars";
      case Gender.Female:
        return "venus";
      case Gender.Other:
        return "genderless";
    }
  };

  if (!patientDetails) {
    return null;
  }

  return (
    <div className="App">
      <h2>{ patientDetails.name } <Icon name={ getPatientIcon(patientDetails.gender) } /></h2>
      <p>ssn: { patientDetails.ssn }</p>
      <p>occupation: { patientDetails.occupation }</p>
      {
        patientDetails.entries.length > 0 &&
        <div>
          <h3>entries</h3>
          { patientDetails.entries.map(entry => <Entry key={entry.id} entry={ entry } />) }
        </div>
      }
    </div>
  );
};

export default PatientDetails;
