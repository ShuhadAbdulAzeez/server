//SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash"; //Lodash provides functional programming helpers without extending any built-in objects.
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
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
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
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

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm", // these specifies were redux form is going to store all the values out of the form inside our redux store.
  destroyOnUnmount: false
})(SurveyForm);

//inside here we have to specifically add a setting that said if these component "destroyOnUnmount" if the SurveyForm form unmounted and do not destroy any of the values contained within the SurveyForm 
