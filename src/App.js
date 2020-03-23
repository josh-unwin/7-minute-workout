import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import Button from './components/shared/Button'
import HomeMenu from './components/HomeMenu'
import QuickSteps from './components/QuickSteps';
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <div className="flex flex-grow">
        <div className="w-1/2 flex flex-col items-start justify-center">
          <h1 className="m-0 text-left">The 7 Minute Workout</h1>
          <h3 style={{marginTop: "0px", marginBottom: "50px"}}>That you can do at home</h3>
          <Link to={{pathname: '/go'}}>
            <Button text="Let's Go!" />
          </Link>
          
        </div>
        <div className="w-1/2 flex flex-col justify-center items-end">
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
