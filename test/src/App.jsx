import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import GlobalStore from './stores/GlobalStore'
import { observer } from 'mobx-react'

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

const store = new GlobalStore() 

export default observer(({ }) => (
    <BrowserRouter>
      <main className="container">
        <div>
          <h1>{store.number}</h1>

          <button onClick={store.addOne}>Click ME</button>
          <img className="container__image" alt="react logo" src={reactLogo} />
          <p>If you see this everything is working!</p>
        </div>
        <ul className="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Routes />
      </main>
    </BrowserRouter>
))
