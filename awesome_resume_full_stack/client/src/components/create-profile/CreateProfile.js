import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';
class CreateProfile extends Component {
 
    state = {
      displaySocialInputs: false,
      handle: '',
      headline:'',
      company: '',
      website: '',
      city: '',
      country: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    }

  componentDidMount() {
      this.props.getCurrentProfile();
   }

  static getDerivedStateFromProps (props, state) {
    if(props.errors !== state.errors) {
    return {errors: props.errors}
    }
    if(!isEmpty(props.profile.profile) ) {
      console.log(props.profile.profile);
      props.history.push('/edit-profile');
    }
    return null;
}

  onSubmitHandler(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      headline: this.state.headline,
      company: this.state.company,
      website: this.state.website,
      city: this.state.city,
      country: this.state.country,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChangeHandler.bind(this)}
            error={errors.twitter}
            inputClassNames = "form__input form__input-sm form__input-white"
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChangeHandler.bind(this)}
            error={errors.facebook}
            inputClassNames = "form__input form__input-sm form__input-white"
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChangeHandler.bind(this)}
            error={errors.linkedin}
            inputClassNames = "form__input form__input-sm form__input-white"
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChangeHandler.bind(this)}
            error={errors.youtube}
            inputClassNames = "form__input form__input-sm form__input-white"
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChangeHandler.bind(this)}
            error={errors.instagram}
            inputClassNames = "form__input form__input-sm form__input-white"
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select Career Status', value: 0 },
      { label: 'Student/Intern', value: 'Student/Intern' },
      { label: 'Entry Level', value: 'Entry Level' },
      { label: 'Starting Career ( 1 to 5 years )', value: 'Starting Career' },
      { label: 'Mid Career/ Established', value: 'Established' },
      { label: 'Late Career/ Seasoned', value: 'Late Career' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className = "section-createProfile">
          <div className="createProfile">
            <div className = "createProfile__header"> 

             <div>
              <Link className = "btn-2 btn--blue" to = "/dashboard"> Back to Dashboard </Link> 
              </div>
              
              <h2 className = "heading-secondary" style = {{color:'#0C3953'}}>Create Your Profile</h2>
            </div>
             
                <form className = "createProfile__form" onSubmit={this.onSubmitHandler.bind(this)}>
                  <TextFieldGroup
                    placeholder="* Your username/handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.handle}
                    info="A unique name for your profile URL. ie.name / business"
                  />
                  <SelectListGroup
                    placeholder="Status"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChangeHandler.bind(this)}
                    options={options}
                    error={errors.status}
                    info="How far are you in your career?"
                  />
                   <TextAreaFieldGroup
                     placeholder="Headline: i.e React developer at CraveJs"
                    name="headline"
                    value={this.state.headline}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.headline}
                    info="Insert attention grabbing headline!"
                    cols="90"
                    rows = "3"
                  />
                  <TextFieldGroup
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.company}
                    info="Your company or the one you work work"
                  />
                  <TextFieldGroup
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.website}
                    info="Your website or a company one"
                  />
                  <TextFieldGroup
                    placeholder="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.country}
                    info=""
                  />
                  <TextFieldGroup
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.city}
                    info=""
                  />
              
                  <TextFieldGroup
                    placeholder="* Skills"
                    name="skills"
                    value={this.state.skills}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.skills}
                    info="Please use comma separated values (eg.
                      HTML,CSS,JavaScript,PHP"
                  />
                  <TextFieldGroup
                    placeholder="Github Username"
                    name="githubusername"
                    value={this.state.githubusername}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.githubusername}
                    info="If you want your latest repos and a Github link, include your username"
                  />
                  <TextAreaFieldGroup
                    placeholder="Short Summary of yourself"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.bio}
                    info="Tell us a little about yourself"
                    cols="90"
                    rows = "15"
                  />

                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState(prevState => ({
                          displaySocialInputs: !prevState.displaySocialInputs
                        }));
                      }}
                      className="btn btn-2 btn--secondary"
                    >
                      Add Social Network Links
                    </button>
                    <span style = {{marginLeft: '1rem',fontWeight:'600'}} className = "CreateProfile__options" >Optional</span>
                  </div>
                  {socialInputs}
                  <input
                    style = {{
                      marginTop: '1rem',
                      padding: '1.5rem 4rem'
              
                    }}
                    className="btn btn-2 btn--primary"
                    type="submit"
                    value="Submit"
                  />
                </form>
        </div>
      </div>
     
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
