import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>Subdomains</h1>
    <section>
    <p>Suppose I own the domain <pre>louisritchie.com</pre>, and I want to use it as my personal website. I can configure Nginx with the following subdomains:</p>
      <pre>louisritchie.com</pre> has my main site content on it<br />
      <pre><b>projects.</b>louisritchie.com</pre> to show off my projects<br />
      <pre><b>beta.</b>louisritchie.com</pre> to host new versions of my personal site, for testing<br />
      <pre><b>data.</b>louisritchie.com</pre> to host analytics for my site - who is visiting it, from what IPs<br />
      Nginx makes this pretty easy.
    </section>
  </ContentSlide>
)
