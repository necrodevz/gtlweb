import React, {Component} from 'react'
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import {Main} from './layouts'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import bg from './img/land1.jpg'

export class WWW extends Component {
  render() {
    return (
      <UWPThemeProvider
        theme={getTheme({
          themeName: "light", // set custom theme
          accent: "#0078D7", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: bg // set global desktop background image
        })}
      >
        <Main />
      </UWPThemeProvider>
    )
  }
}

export default WWW