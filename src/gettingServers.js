import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>How do I acquire a server?</h1>
    <section>
      <p>There a plenty of VPS providers, most of which have a $5/month offering.</p>
      <p>We'll use prgmr.com.</p> 
    </section>
    <section className='images'>
      <img src={require('./do.png')}/>
      <img src={require('./linode.png')}/>
      <img src={require('./prgmr.png')}/>
    </section>
  </ContentSlide>
)
