import React, { Component } from 'react';
import Login from '../../components/auth/Login';
import Layout from '../../components/layout/Layout';

class LoginPage extends Component {
    render() {
        return (
            <Layout>
                <Login/>
            </Layout>
        );
    }
}

export default LoginPage;