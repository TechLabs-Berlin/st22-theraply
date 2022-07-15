import placeholderImg from './placeholder-image.png';
import RegisterBtn from './components/RegisterBtn';
import LoginBtn from './components/LoginBtn';
import Navbar from './components/Navbar';
import TextGrid from './components/TextGrid';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={placeholderImg} className="HeaderImg" alt="headerimage" />
        <RegisterBtn />
        <LoginBtn />
      </header>
      <Navbar />
      <TextGrid />
      <Footer />
    </div>
  );
}

export default App;
