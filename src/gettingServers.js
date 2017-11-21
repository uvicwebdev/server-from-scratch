import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>How do I acquire a server?</h1>
    <section>
      <p>There a plenty of VPS providers, most of which have a $5/month offering.</p>
      <p>We'll use <b>Digital Ocean</b> to rent a <b>$5/month</b> server with pre-installed <b>Ubuntu 16.04 LTS</b>.</p> 
      <small>If you want to jump the gun right now and go buy a server, make SURE you provide your SSH key when you purchase it. Without it, it's going to be painful to log in for the first time.</small> 
    </section>
    <section className='images'>
      <img src={require('./do.png')}/>
      <img src={require('./linode.png')}/>
      <img src={require('./prgmr.png')}/>
    </section>
  </ContentSlide>
)
