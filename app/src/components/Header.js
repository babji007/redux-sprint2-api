
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Header extends Component {

    render() {
        return (
     
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">React @ Mphasis</a>
                
              </div>
              <ul class="nav navbar-nav">
              
              
              <li ><Link to={'/emplist'}>Employee</Link></li>
              
              
              </ul>

             
            </div>
          </nav>
              

        )
    }
}
