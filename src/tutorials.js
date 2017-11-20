import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>I've acquired a server, and I have a domain. What now?</h1>
    <section>
      <p>Now you're going to want to dig into Digital Ocean's fantastic tutorials.</p>
      <a href='digitalocean.com'>Securing your server</a>
    </section>
  </ContentSlide>
)
