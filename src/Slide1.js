import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>Why have a personal server?</h1>
    <ul>
      <Step index={1}><li>
        Serve your own content, on your own domain, with complete control.
        <small>No google, no amazon, no 3rd parties except for the VPN provider.</small>
      </li></Step>
      <Step index={2}><li>
        Host databases, APIs, and apps.
        <small>Use one machine to power everything, or have multiple servers that communicate with each other.</small>
        <small>Have complete control over all HTTP communication with clients and other servers.</small>
      </li></Step>
      <Step index={3}><li>
        Lots of learning involved as you administrate your own personal cloud.
        <small>If you ever wanted to control a botnet, setting up a personal server is a great first step.</small>
      </li></Step>
      <Step index={4}><li>
        Set up a proxy to conceal your internet activity.
        <small>You can route all of your internet activity through your server using Nginx.</small>
      </li></Step>
    </ul>
  </ContentSlide>
)
