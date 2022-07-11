import React from 'react';
import { Home } from './Home';
import { Layout } from './Components/Layout';
import { NavBar } from './Components/NavBar';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Layout>
        <Home />
      </Layout>
    </React.Fragment>
  );
}

export default App;
