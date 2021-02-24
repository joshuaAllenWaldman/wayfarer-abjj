import React from 'react'

class NewPostForm extends React.Component {
  //this.props.currentCity
  state = {
    cities: [],
    city: '',
    title: '',
    body: ''
    //user
    //images
    
  }

  componentDidMount() {
    fetch(`https://abjj-wayfarer-api.herokuapp.com/cities/`)
    .then((res) => res.json())
      .then((jsonData) => {
        this.setState({cities: jsonData})
      })
      .catch((err) => console.log(err))
    .then(() => {this.setState({city: this.props.currentCity._id})})
    .then(console.log(this.state))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  componentDidUpdate() {}

  handleSubmit = (event) => {
    event.preventDefault()
    const requestBody = {
      city: this.state.city,
      title: this.state.title,
      body: this.state.body
    }
    // console.log(JSON.stringify(this.state.form))
    fetch('https://abjj-wayfarer-api.herokuapp.com/post/', {
      method: 'post',
      // enctype: 'multipart/form-data',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then((response) => {
      // console.log(response)
      return response.json()
    })
    .then((jsonData) => {
      // console.log(jsonData)
    })
    .catch((err) => {throw err})
  }

  render() {
    const options = []
      for (let city of this.state.cities) {
        options.push(<option value={city._id}>{city.name}</option>)
      }
    
  return (
    <div className="container">
      <h2>Create a new Post</h2>
      <form onSubmit={this.handleSubmit}>
        <select name="city" id="city" onChange={this.handleChange}>
          {options}
        </select> <br/>
        <label htmlFor="title">Title</label> <br/>
        <input onChange={this.handleChange} type="text" id="title" name="title" /> <br/>
        <label htmlFor="body">Body</label> <br/>
        <textarea onChange={this.handleChange} name="body" id="body" cols="19" rows="5"></textarea>
        <br/>
        <button type="submit" >Submit</button>
      </form>

    </div>
  )}
}

export default NewPostForm;