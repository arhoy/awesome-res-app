import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/landing/Header';
import Register from '../components/auth/Register';

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Header/>
                <Register/>
            </Layout>
            
        );
    }
}

export default HomePage;