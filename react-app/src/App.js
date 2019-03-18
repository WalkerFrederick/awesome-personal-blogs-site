import React, { Component } from 'react';
import './App.css';

const Header = () => {
  
  return (
    <nav className='App-header'>
      <a>Awesome Personal Blogs</a>
    </nav>
  )

}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {blogs: []}

  }

  componentDidMount() {
    fetch('/blogs')
      .then(res => res.json())
      .then(blogs => this.setState({blogs: blogs.blogs}));
  }

  render() {
    this.blogs = this.state.blogs.map((blog) => {

      return (
        <li className="list-item" key={blog.id}>
          <a href={blog.url} target={'_blank'}>
          
          {blog.name}
          
          </a>
        </li>
      )
  
    })

    return (
      <div className="App">
      <Header/>
       <ul className='list'>
          { this.blogs }
       </ul>
      </div>
    );
  }
}


export default App;
