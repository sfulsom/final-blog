import React, { Component } from 'react';
import BlogsForm from './BlogsForm';
import {Card, Image, Modal, Button, Header, Icon, } from 'semantic-ui-react'

class Blog extends Component {

    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: false })

    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
        // const { blog, deleteBlog, updateBlog } = this.props;
        const { open, closeOnEscape, closeOnDimmerClick } = this.state
        const {  id, deleteBlogs, updateBlogs, ...rest } = this.props;
        return (
            <>
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

                <Modal trigger={<Button className="BottonView" color='blue'>View Blog</Button>} closeIcon>
    <Modal.Header>{rest.title}</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='huge' src={rest.image} wrapped />

      <Modal.Description>
        <Header>{rest.subtitle}</Header>
        <p>
        {rest.body}
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>

                    <Button color='red' onClick={() => deleteBlogs(id)}>Delete</Button>
                    <Button color='darkgray' onClick={() => this.toggleEdit()}>Edit</Button>
                    {!this.state.editing ?
                        <div></div>
                        :
                        <BlogsForm id={id}{...rest} update={updateBlogs} toggleEdit={this.toggleEdit} />
                    }
                </Card.Content>
            </Card>
            
            </>
        )
    }

}

export default Blog;