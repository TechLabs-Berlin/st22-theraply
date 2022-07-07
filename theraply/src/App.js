import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Process from './pages/Process';
import Search from './pages/Search';
import Tests from './pages/Tests';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/process" component={Process} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/tests" component={Tests} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
