import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loadProfile } from './action';

class ProfileIndex extends Component {

  componentWillMount(){
    this.props.loadProfile();
  }

  onSubmit(){

  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="name"
            type="text"
            component="input"
          />
          <Field
            name="email"
            type="text"
            component="input"
          />
          <button type="submit" > send form </button>
        </form>
      </div>
    )
  }
}


function mapStateToProps({profile}){
  console.log(profile);
  return {profile, initialValue : { name: profile.name, email: profile.email}}
};

ProfileIndex = connect(mapStateToProps, {loadProfile})(ProfileIndex);

export default reduxForm({
  form: 'profile_index'
})(ProfileIndex)