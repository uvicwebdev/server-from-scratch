import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>I've acquired a server, and I have a domain. What now?</h1>
    <section>
      <p>Now you're going to want to dig into Digital Ocean's fantastic tutorials.</p>
      <p>These two should give you plenty to do:</p>
      <a href='https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04'>Securing your server</a><br />
      <a href='https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04'>Installing Nginx</a>
    </section>
  </ContentSlide>
)
