import './Layout.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RegisterBtn from './RegisterBtn';
import LoginBtn from './LoginBtn';

function Layout({ children }) {
    return (
        <div className="layout">
            <header className="App-header">
                <Navbar />
                <RegisterBtn />
                <LoginBtn />
            </header>
            <main>{children}</main>
            <Footer />
        </div>

    );

}

export default Layout;
