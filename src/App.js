import React, { Component } from 'react'
import { Slide, Presentation } from 'react-presents'
import Slide1 from './Slide1.js'
import Subdomains from './subdomains.js'
import GettingServers from './gettingServers.js'
import GettingDomain from './gettingDomain.js'
import Tutorials from './tutorials.js'
import SomeCommands from './someCommands.js'

class App extends Component {
  render() {
    return (
      <Presentation>
        <Slide component={Slide1} key={1} />
        <Slide component={Subdomains} key={2} />
        <Slide component={GettingServers} key={3} />
        <Slide component={GettingDomain} key={4} />
        <Slide component={Tutorials} key={5} />
        <Slide component={SomeCommands} key={6} />
      </Presentation>
    );
  }
}

export default App;
