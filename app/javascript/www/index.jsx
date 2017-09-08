/*global ReactUWP*/
import React, {Component} from 'react'
import {Main} from './layouts'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import bg from './img/land1.jpg'
import 'semantic-ui-css/semantic.min.css'

export class WWW extends Component {
  
  render() {
    return (
        <Router>
          <Main />
        </Router>
    )
  }
}

export default WWW