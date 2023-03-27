//SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash"; //Lodash provides functional programming helpers without extending any built-in objects.
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="survey-form">
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <button type="submit">Submit</button>
          <Link to="/surveys" className="cancel-btn">
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "You must provide a title";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
