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
        <div className="flex flex-col md:flex-row flex-grow mb-6 md:mb-40 w-full">
          <div className="border-b border-blueGrey pb-4 md:border-0 md:w-1/2 flex flex-col md:items-start justify-center">
            <h1 className="m-0 md:text-left">The 7 Minute Workout</h1>
            <h3 className="-mt-2 mb-6 md:mb-16 italic w-full md:text-left">That you can do at home</h3>
            <Link to={{pathname: '/go', restPeriod: restPeriod}}>
              <Button text="Let's Go!" />
            </Link>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center md:items-end">
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
