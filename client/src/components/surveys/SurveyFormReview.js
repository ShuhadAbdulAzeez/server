// SurveyFormReview shows users their form inputs for review.
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
            <h2>{formValues[name]}</h2>
        </div>
      </div>
    );
  });

  return (
    <div className="review-field">
      <h1>Please Confirm Your Entries</h1>
      {reviewFields}
      <button className="review-cancel-btn" onClick={onCancel}>
        Back
      </button>
      <button className="review-send-btn" onClick={ () => submitSurvey(formValues, history)}>
        Send Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
