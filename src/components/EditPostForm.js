import React from 'react';



class EditPostForm extends React.Component {
  state = {
    city: '',
    title: '',
    body: '',
  }

  componentDidMount() {

  }
  
  handleSubmit = () => {
    fetch('https://abjj-wayfarer-api.herokuapp.com/post', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
  }

  prefillForm () {
    const thisPost = this.props.posts.filter((post) => {
      return post._id
    })
    this.setState({
      
    })
  }

  render() {

    const options = []
    for (let city of this.props.cities) {
      if (city.name !== this.props.city.name){
        options.push(<option value={city._id}>{city.name}</option>)
      } 
    }
    return(
      <div className="container">
      <h2>Edit le post</h2>
      <form onSubmit={this.handleSubmit}>
        <select name="city" id="city"  onChange={this.handleChange}>
          <option value={this.props.city._id}>{this.props.city.name}</option>
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
  
    )
  }
}

export default EditPostForm;