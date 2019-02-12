import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
 
    state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
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
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className = "section-createProfile">
          <div className="createProfile">
            <div className = "createProfile__header"> 
              <h2 className = "heading-secondary" style = {{color:'#0C3953'}}>Create Your Profile</h2>
            </div>
             
                <form className = "createProfile__form" onSubmit={this.onSubmitHandler.bind(this)}>
                  <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.handle}
                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                  />
                  <SelectListGroup
                    placeholder="Status"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChangeHandler.bind(this)}
                    options={options}
                    error={errors.status}
                    info="Give us an idea of where you are at in your career"
                  />
                  <TextFieldGroup
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.company}
                    info="Could be your own company or one you work for"
                  />
                  <TextFieldGroup
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.website}
                    info="Could be your own website or a company one"
                  />
                  <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChangeHandler.bind(this)}
                    error={errors.location}
                    info="City or city & state suggested (eg. Boston, MA)"
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
                    placeholder="Short Bio"
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

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
