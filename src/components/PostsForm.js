import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui input error">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="categories" component={this.renderInput} label="Categories" />
        <Field name="content" component={this.renderInput} label="Content" />
        <button className="ui button primary">Submit</button>
        <button className="ui button">
          <Link to="/">Cancel</Link>
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.categories) {
    errors.categories = 'You must enter a description';
  }

  if (!formValues.content) {
    errors.content = 'You must enter a content';
  }

  return errors;
};

export default reduxForm({ form: 'postsNew', validate })(PostsForm);
