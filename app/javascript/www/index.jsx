import React, {Component} from 'react'
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import {Main} from './layouts'
import { BrowserRouter as Router, Route} from 'react-router-dom'

export class WWW extends Component {
  render() {
    return (
      <UWPThemeProvider
        theme={getTheme({
          themeName: "light", // set custom theme
          accent: "#0078D7", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: "http://127.0.0.1:8092/static/images/jennifer-bailey-10753.jpg" // set global desktop background image
        })}
      >
        <Main />
      </UWPThemeProvider>
    )
  }
}

export default WWW