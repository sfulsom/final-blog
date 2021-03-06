import React, { Component } from 'react';
import { Header, Grid, Button, Icon } from 'semantic-ui-react';
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
        console.log(res)
        const { blogs } = this.state;
        this.setState({ blogs: [...blogs, res.data]})
    })
    .catch( res => {
        console.log(res)
        debugger
      })
  }

  updateBlogs = (id, blog) => {
    axios.put(`/api/blogs/${id}/`, {blog})
      .then( res => {
        const blogs = this.state.blogs.map( b => {
          if( b.id === id)
            return res.data
          return b
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
            <Grid columns='three' divided>
                    {blogs.map(b => {
                        return(
                            <Grid.Column>
                                <Blog key={b.id} 
                                {...b} 
                                deleteBlogs={this.deleteBlogs} 
                                updateBlogs={this.updateBlogs} /> 
                            </Grid.Column>
                        )
                    })}
            </Grid>
        </div>
    )

  }

  render () {
    
    return (
      <>
        <h1 class="h2">Add blogs</h1>
        <Button className="ButtonSpace" onClick={this.toggleEdit}>Add Blog</Button>
        { this.state.editing ? <BlogsForm add={this.addBlog}/>: <div></div> 
}
{this.renderBlogs()}
        
      </>
    )
  }
}


export default Blogs;