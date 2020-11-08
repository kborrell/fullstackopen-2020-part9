/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Entry, HealthCheckEntry, OccupationalHealthcareEntry, HospitalEntry } from './types';

const toNewEntry = (object : any): Entry => {
  switch(object.type) {
    case "HealthCheck":
      return toNewHealthCheckEntry(object);
    case "OccupationalHealthcare":
      return toNewOccupationalHealthcareEntry(object);
    case "Hospital":
      return toNewHospitalEntry(object);
    default:
      throw Error("no allowed type");
  }
};

const toNewHealthCheckEntry = (object: any): HealthCheckEntry => {
  const addedEntry: HealthCheckEntry = {

  };

  return addedEntry;
};

const parseName = (name : any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrent or missing name');
  }

  return name;
};

const parseDateOfBirth = (dateOfBirth : any): string => {
  if (!dateOfBirth || !isString(dateOfBirth)) {
    throw new Error('Incorrent or missing dateOfBirth');
  }

  return dateOfBirth;
};

const parseGender = (gender : any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrent or missing gender');
  }

  return gender;
};

const parseOccupation = (occupation : any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrent or missing occupation');
  }

  return occupation;
};

const parseSsn = (ssn : any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrent or missing ssn');
  }

  return ssn;
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

export default toNewEntry;