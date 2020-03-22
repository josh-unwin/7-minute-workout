import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import Button from './components/shared/Button'
import HomeMenu from './components/HomeMenu'
import QuickSteps from './components/QuickSteps';
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <div class="flex flex-grow">
        <div class="w-1/2 flex flex-col items-start justify-center">
          <h1 style={{margin: "0px"}}>The 7 Minute Workout</h1>
          <h3 style={{marginTop: "0px", marginBottom: "50px"}}>That you can do at home</h3>
          <Link to={`/go`}>
            <Button text="Let's Go!" />
          </Link>
          
        </div>
        <div class="w-1/2 flex flex-col justify-center items-end">
          <HomeMenu />
        </div>
      </div>
      <div className="row flex-grow">
        <QuickSteps />
      </div>
    </Layout>
  );
}

export default App;
