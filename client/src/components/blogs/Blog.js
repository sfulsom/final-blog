import React, { Component } from 'react';
import BlogsForm from './BlogsForm';
import { Container } from 'semantic-ui-react'

class Blog extends Component {

    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
        // const { blog, deleteBlog, updateBlog } = this.props;
        const {  id, deleteBlog, updateBlogs, ...rest } = this.props;
        return (
            <Container>
                <>
                    <h3>{rest.title}</h3>
                    <h5>{rest.subtitle}</h5>
                    <button onClick={() => deleteBlog(id)}>Delete</button>
                    <button onClick={() => this.toggleEdit()}>Edit</button>
                </>
                {!this.state.editing ?
                    <div></div>
                    :
                    <BlogsForm id={id}{...rest} update={updateBlogs} toggleEdit={this.toggleEdit} />
                }

            </Container>
        )
    }

}

export default Blog;