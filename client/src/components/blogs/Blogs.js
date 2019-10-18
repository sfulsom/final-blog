import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import BlogsForm from './BlogsForm'
import Blog from "./Blog"

class Blogs extends Component {
  state = { editing: false, blogs: [] }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  componentDidMount() {
    axios.get('/api/blogs')
      .then( res => {
        this.setState({blogs: res.data})
      })
  }

  addBlog = (blogs) => {
    axios.post(`/api/blogs/`, blogs)
      .then( res => {
        const { blogs } = this.state;
        this.setState({ blogs: [...blogs, res.data]})
      })
      .catch( res => {
        debugger
      })
  }

  updateBlogs = (id, blog) => {
    axios.put(`/api/blogs/${id}/`, {blog})
      .then( res => {
        const blogs = this.state.blogs.map( p => {
          if( blog.id === id)
            return res.data
          return blog
        })
        this.setState({ blogs, })
      })
  }

  deleteBlogs = (id) => {
    axios.delete(`/api/blogs/${id}/`)
      .then( res => {
        const { blogs } = this.state;
        this.setState({ blogs: blogs.filter( p => p.id !== id )})
      })
  }
  renderBlogs = () => {

    const {blogs} =this.state;
    return (
        <div>
            {blogs.map(b => {
                return(
                    <Blog key={b.id} 
                    {...b} 
                    deleteBlogs={this.deleteBlogs} 
                    updateBlogs={this.updateBlogs} /> 
                )
            })}
        </div>
    )

  }

  render () {
    
    return (
      <>
        <h2>Add blogs</h2>
        <Button onClick={this.toggleEdit}>add blog</Button>
        { this.state.editing ? <BlogsForm add={this.addBlog}/>: <div></div> 
}
{this.renderBlogs()}
        
      </>
    )
  }
}


export default Blogs;