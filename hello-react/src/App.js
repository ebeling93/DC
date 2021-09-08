import React, { Component } from 'react';
import 'app.css';
import Body from "./Body";

import NavBar from './NavBar'

class App extends Component {
  
  render() {
    const articles = [
      {title: "Hello WatchKit", content: "Last month Apple realesed the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release."},
      {title: "Introduction to Swift", content: "Swift is a modern programming language developed by Apple to create the next generation of iOs and OSX applications."}
    ]
  }
}


export default App;
