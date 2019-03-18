import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {blogs: []}

  componentDidMount() {
    fetch('/blogs')
      .then(res => res.json())
      .then(blogs => console.log(blogs.blogs));
  }

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
