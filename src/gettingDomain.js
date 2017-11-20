import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>How about my domain?</h1>
    <section>
      <p>So you have to buy this as well, except you're buying this on a yearly basis.</p>
      <p>My preferred domain name marketplace is Namecheap.</p> 
    </section>
    <section className='images'>
      <img src={require('./namecheap.png')}/>
    </section>
  </ContentSlide>
)
