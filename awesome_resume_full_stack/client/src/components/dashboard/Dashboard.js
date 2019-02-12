import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import DashboardTable from './DashboardTable';
// import Spinner from '../common/Spinner';
// import ProfileActions from './ProfileActions';
 // import Experience from './Experience';
  // import Education from './Education';


class Dashboard extends Component {

    componentDidMount() {
        this.props.getCurrentProfile();
     }

     deleteAccountHandler = () => {
      this.props.deleteAccount();
     }

    render() {
        
            const { user } = this.props.auth;
            const { profile, loading } = this.props.profile;
            let dashboardContent;
            if(profile === null || loading ){
              dashboardContent = ( 
                  <div className = "dashboard__loading">Loading Profile...</div>
              )
            }
            else {
                if(Object.keys(profile).length > 0){
                  dashboardContent = (
                    <React.Fragment>
                        <div className="dashboard__welcome">
                              <h3 className = "heading-secondary"> Your Dashboard </h3>
                              <div className = "dashboard__user"> { `${user.name}'s profile `} </div>
                              <div className="dashboard__links">
                                    <ul>
                                      <li> <Link className = "dashboard__link" to = "edit-profile">Edit Profile</Link> </li>
                                      <li> <Link className = "dashboard__link" to = "add-experience"> Add Experience</Link> </li>
                                      <li> <Link className = "dashboard__link" to = "add-education"> Add Education</Link> </li>
                                    </ul>
                            </div>
                        </div>

                        <div className="dashboard__experience">
                                  <DashboardTable/>
                        </div>

                        <div className="dashboard__education">
                                  <DashboardTable/>
                        </div>

                        <button className = "btn btn-danger" onClick = {this.deleteAccountHandler}>Delete Account</button>
                    </React.Fragment>
                  )
              }

                else{
                    dashboardContent = (
                        <div className="dashboard__welcome">
                          <h3 className = "heading-secondary heading-blue"> Your Dashboard </h3>
                          <div className = "dashboard__user"> { `${user.name}'s profile `} </div>
                          <div className="dashboard__getStarted">
                              <p style = {{marginBottom: '2rem'}}>Looks like you have not yet created a profile. Let's get started! </p>

                              <Link className = "btn btn--primary" to = "/create-profile"> Create Profile </Link>
                          </div>
                      </div>
                    )
                }
            }

            
      
        return (
          <section className="section-dashboard">
            <div className="dashboard">
               {dashboardContent}
            </div>
          </section>
        );
    }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  errors:state.errors
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
