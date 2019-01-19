import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsForm extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="categories" component={this.renderInput} label="Categories" />
        <Field name="content" component={this.renderInput} label="Content" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// const validate = formValues => {
//   const errors = {};

//   if (!formValues.title) {
//     errors.title = 'You must enter a title';
//   }

//   if (!formValues.categories) {
//     errors.categories = 'You must enter a description';
//   }

//   if (!formValues.content) {
//     errors.content = 'You must enter a content';
//   }

//   return errors;
// };

export default reduxForm({ form: 'postsNew' })(PostsForm);
