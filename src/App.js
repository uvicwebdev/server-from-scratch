import React, { Component } from 'react'
import { Slide, Presentation } from 'react-presents'
import Slide1 from './Slide1.js'
import Subdomains from './subdomains.js'
import GettingServers from './gettingServers.js'

class App extends Component {
  render() {
    return (
      <Presentation>
        <Slide component={Slide1} key={1} />
        <Slide component={Subdomains} key={1} />
        <Slide component={GettingServers} key={1} />
      </Presentation>
    );
  }
}

export default App;
