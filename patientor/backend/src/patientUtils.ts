/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Gender, NewPatient } from './types';

const toNewPatient = (object : any): NewPatient => {
  const newPatient : NewPatient = {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
    ssn: parseSsn(object.ssn),
    entries: []
  };
  return newPatient;
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

export default toNewPatient;