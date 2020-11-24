import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import TinderCards from './container/Cards/TinderCards';
import SwipeButtons from './container/SwipeButtons/SwipeButtons';

class App extends Component {
  render () {
    return (
      <Layout>
        <TinderCards /> 
        <SwipeButtons />
      </Layout>
    )
  }
}

export default App;
