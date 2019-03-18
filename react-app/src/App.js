import React, { Component } from 'react';
import './App.css';

const Header = () => {
  return (
    <nav className='App-header'>
      <a>Awesome Personal Blogs</a>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className='App-footer'>
      <a target="_blank" href="https://github.com/jkup/awesome-personal-blogs">
        Original List by Jon Kuperman
      </a>
      <a target="_blank" href="https://github.com/jkup/awesome-personal-blogs">
        View the GitHub repo for this site.
      </a>
    </footer>
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

      console.log(blog.url)

      return (
        <li className="list-item" key={blog.id}>
          <a href={blog.url} target={'_blank'}>
          
          <img height="12" width="12" alt={`${blog.name}'s blog favicon`} src={`https://www.google.com/s2/favicons?domain=${blog.url}`} />


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
       <Footer/>
      </div>
    );
  }
}


export default App;
