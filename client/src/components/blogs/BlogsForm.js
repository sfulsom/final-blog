import { Form } from 'semantic-ui-react';
import React, { Component } from 'react';

class BlogsForm extends Component {
    state = { title: '',subtitle: '',date: '',image: '',body: '' }
  
    componentDidMount() {
      if (this.props.id) {
          const{ update, toggleEdit, ...rest} = this.props
        this.setState({ ...rest })
      }
    }
  
    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.id) {
        this.props.update(this.props.id, this.state)
        this.props.toggleEdit()
      } else {
        this.props.add(this.state)
      }
      this.setState({ name: '' })
    }
  
    render() {
      const { title,subtitle,date,body,image } = this.state;
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            required
            placeholder='title'
            label='title'
            name='title'
            value={title}
            onChange={this.handleChange}
          />
          <Form.Input 
            required
            placeholder='subtitle'
            label='subtitle'
            name='subtitle'
            value={subtitle}
            onChange={this.handleChange}
          />
          <Form.Input 
            required
            type= "date"
            placeholder='date'
            label='date'
            name='date'
            value={date}
            onChange={this.handleChange}
          />
          <Form.Input 
            required
            placeholder='image'
            label='image'
            name='image'
            value={image}
            onChange={this.handleChange}
          />
          <Form.TextArea 
            required
            placeholder='body'
            label='body'
            name='body'
            value={body}
            onChange={this.handleChange}
          />
          
          <Form.Button color='green'>Submit</Form.Button>
        </Form>
      )
    }
  }
  
  export default BlogsForm;