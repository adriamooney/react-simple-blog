import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {
    //destructering properties on nested objects;
    //this is same as field.meta.touched and field.meta.error
    const { meta : {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return(
      <div className={className}>
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    //action creator will POST the post to the api
    // console.log(values);

    this.props.createPost(values, () => {
        this.props.history.push('/');
    });
  }

  render() {

    const {handleSubmit}= this.props;

    return(
      <div>
        <h3>Posts</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
          name="title"
          label="title"
          component={this.renderField}
          />
          <Field
          label="Categories"
          name="categories"
          component={this.renderField}
          />
          <Field
          label="Post Content"
          name="content"
          component={this.renderField}
          />
          <button type="submit"  className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>

        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  //validate the inputs from the values
  if(!values.title || values.title.length < 3) {
    errors.title = 'Enter a title';
  }
  if(!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter content';
  }
  // if errors is empty, the form submits
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
);
