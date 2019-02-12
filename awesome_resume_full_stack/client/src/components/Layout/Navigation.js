import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navigation extends Component {
    state = {
        isOpen: false
    }

    logoutUserHandler(e) {
        e.preventDefault();
         // this.props.clearCurrentProfile();
        this.props.logoutUser();
      }
    onNavToggleHandler = () => {
        this.setState({isOpen:!this.state.isOpen});
    }
    render() {
        console.log(this.state.isOpen);
        const { user, isAuthenticated } = this.props.auth;
        return (
                <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                    <label onClick = { this.onNavToggleHandler.bind(this)} htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>

                    {
                        this.state.isOpen ? 
                        <React.Fragment>
                            <div className="navigation__background">&nbsp;</div>
                            <nav className="navigation__nav">
                                <ul className="navigation__list">
                                    <li> <Link to = "/" className = "navigation__link">Daily Feed</Link> </li>
                                    <li> <Link to = "/" className = "navigation__link" >About Us</Link> </li>
                                    <li> <Link to = "/" className = "navigation__link" >Articles</Link> </li>
                                    <li> <Link to = "/" className = "navigation__link" >Create Account</Link> </li>
                                    <li> <Link to = "/" className = "navigation__link" >Contact Us</Link> </li>
                                    <li className="">
                                    <a
                                        href=""
                                        onClick={this.logoutUserHandler.bind(this)}
                                        className="navigation__link"
                                    >
                                        <img
                                        className="rounded-circle"
                                        src={user.avatar}
                                        alt={user.name}
                                        style={{ width: '25px', marginRight: '5px' }}
                                        title="You must have a Gravatar connected to your email to display an image"
                                        />{' '}
                                        Logout
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </React.Fragment>
                        
                        :null
                    }
                    
                </div>
        )
    }
}

Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, { logoutUser })(Navigation);