import React from 'react'
import './Layout.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout({ children }) {
    return (
        <div className="layout">
            <header className="App-header">
                <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
        </div>

    );

}

export default Layout;
