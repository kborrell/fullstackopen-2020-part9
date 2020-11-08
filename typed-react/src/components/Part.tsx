import React from 'react';
import { CoursePart } from '../types';

interface PartProps {
  part: CoursePart
}

const Part: React.FC<PartProps> = ({ part }) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const renderPartProps = (part : CoursePart) => {
    switch(part.name) {
      case "Fundamentals":
        return (
          <p>{ part.description }</p>
        );
      case "Using props to pass data":
        return (
          <p>Group Project: { part.groupProjectCount }</p>
        );
      case "Deeper type usage":
        return (
          <div>
            <p>{ part.description }</p>
            <p>Submission Link: <a href={ part.exerciseSubmissionLink }>{ part.exerciseSubmissionLink}</a></p>
          </div>
        );
      case "Mastering React":
        return (
          <div>
            <p>{ part.description }</p>
            <p>Professor name: { part.professorName }</p>
          </div>
        )
      default:
        return assertNever(part);
    }
  };

  return (
    <div>
      <b>{ part.name }</b>
      <p>Exercises: { part.exerciseCount }</p>
      <div>
        { renderPartProps(part) }
      </div>
    </div>
  );
};

export default Part;