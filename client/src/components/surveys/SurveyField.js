//SurveyField contains logic to reder a single label and text input
import React from "react";

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="survey-field">
      <label>{label}</label>
      <input {...input} />
      <div style={{ color: 'red' }}>
      {touched && error}
      </div>
    </div>
  );
};

// we got a bigger object right here with a lot of props we want to pass these but don't want to pass it as like as specifically name property we have to have these object "{...input}" in all the keys and values are on it.
