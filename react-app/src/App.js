import React, { Component } from 'react';
import './App.css';

const Header = () => {
  return (
    <nav className='App-header'>
      <a href="https://walkerfrederick.com/" className='icon'>
        <svg height="32" viewBox="0 0 498.81 498.81" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg" class="cls-1" d="M.59.59V499.41H499.41V.59ZM421.8,56.08,353.27,451.74a10,10,0,0,1-2.88,2.88H280.7c-1.15,0-2.11-.95-2.88-2.88L248.45,245,219.08,451.74c-.39,1.93-1.35,2.88-2.88,2.88H146.51c-1.54,0-2.5-.95-2.88-2.88l-68-395.66c-.38-1.53.19-2.3,1.73-2.3h64.51a2.72,2.72,0,0,1,2.87,2.3L181.64,316.4l38-260.32c.37-1.53,1.53-2.3,3.45-2.3h51.83a2.73,2.73,0,0,1,2.88,2.3L315.26,316.4,352.69,56.08a2.73,2.73,0,0,1,2.88-2.3H419.5C421.42,53.78,422.18,54.55,421.8,56.08Z"/>
        </svg>
      </a>
      <a>Awesome Personal Blogs</a>
      <a href="https://github.com/jkup/awesome-personal-blogs" className='icon'>
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>



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

    this.state = {
      lastupdated: '',
      blogs: [],
      loading: true,
    }

  }

  componentDidMount() {
    fetch('/blogs')
      .then(res => res.json())
      .then(blogs => this.setState({lastupdated: blogs.updated, blogs: blogs.blogs}))
      .then( () => this.setState({ loading: false}))
      .catch();
  }

  render() {
    this.blogs = this.state.blogs.map((blog) => {

      return (
        <li className="list-item" key={blog.id}>
          <a href={blog.url} target={'_blank'}>       
          <img height="12" width="12" alt={`${blog.name}'s blog favicon`} src={`https://www.google.com/s2/favicons?domain=${blog.url}`} />
          {blog.name}
          </a>
        </li>
      )
    })

    this.lastUpdated = function() {
      let newDate = Date.now() - this.state.lastupdated;
      return new Date(newDate).getSeconds();
    }

    return (
      <div className="App">
      <Header/>
       <ul className='list'>
          <li className={'list-item list-data'}>Last Updated: { this.lastUpdated() }s ago</li>
          { this.blogs }
          <li className={this.state.loading === true ? 'loading' : 'not-loading'}>
            <div class="loader">Loading...</div>
          </li>
       </ul>
       <Footer/>
      </div>
    );
  }
}


export default App;
