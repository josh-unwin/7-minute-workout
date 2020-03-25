import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import Button from './components/shared/Button'
import HomeMenu from './components/HomeMenu'
import QuickSteps from './components/QuickSteps';
import Layout from './components/Layout'

function App() {
  const [restPeriod, setRestPeriod] = useState(10)

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-grow mb-40 w-full">
          <div className="w-1/2 flex flex-col items-start justify-center">
            <h1 className="m-0 text-left">The 7 Minute Workout</h1>
            <h3 style={{marginTop: "0px", marginBottom: "50px"}}>That you can do at home</h3>
            <Link to={{pathname: '/go', restPeriod: restPeriod}}>
              <Button text="Let's Go!" />
            </Link>
            
          </div>
          <div className="w-1/2 flex flex-col justify-center items-end">
            <HomeMenu restPeriod={restPeriod} setRestPeriod={setRestPeriod} />
          </div>
        </div>
        <div className="row flex-grow w-full">
          <QuickSteps restPeriod={restPeriod} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
