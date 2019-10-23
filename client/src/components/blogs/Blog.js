import React, { Component } from 'react';
import BlogsForm from './BlogsForm';
import {Card, Image} from 'semantic-ui-react'

class Blog extends Component {

    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
        // const { blog, deleteBlog, updateBlog } = this.props;
        const {  id, deleteBlogs, updateBlogs, ...rest } = this.props;
        return (
            <Card>
                <Image src={rest.image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{rest.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{rest.date}</span>
                </Card.Meta>
                <Card.Description>
                {rest.subtitle}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <button onClick={() => deleteBlogs(id)}>Delete</button>
                    <button onClick={() => this.toggleEdit()}>Edit</button>
                    {!this.state.editing ?
                        <div></div>
                        :
                        <BlogsForm id={id}{...rest} update={updateBlogs} toggleEdit={this.toggleEdit} />
                    }
                </Card.Content>
            </Card>
        )
    }

}

export default Blog;