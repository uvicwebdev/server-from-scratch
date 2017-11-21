import React from 'react'
import { ContentSlide, Step, Code } from 'react-presents'
import './style.css'

export default () => (
  <ContentSlide className='slide'>
    <h1>Initial server setup hints</h1>
    <p><em>All of this can be found in the tutorials on the previous slide.</em></p>
    <section>
      <pre style={{display: 'initial', fontSize: 14}}>
      # Initial login as root (did you provide an SSH key when you bought the server?)<br />
      ssh root@YOUR_SERVER_IP<br /><br />

      # To set up a user on your server:
      adduser YOUR_NAME<br />
      usermod -aG sudo YOUR_NAME<br />
      su YOUR_NAME<br /><br />

      # To install Nginx and start serving content:
      sudo apt-get update<br />
      sudo apt-get install nginx<br />
      sudo ufw allow OpenSSH<br />
      sudo ufw allow 'Nginx Full'<br />
      sudo uwf enable<br />

      # See what your firewall is up to.<br />
      sudo uwf status<br />

      # See what your Nginx is up to.<br />
      sudo systemctl status nginx<br />
      </pre>
    </section>
  </ContentSlide>
)
