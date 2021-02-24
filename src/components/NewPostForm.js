import React from 'react'

class NewPostForm extends React.Component {
  //this.props.currentCity
  state = {
    cities: []
  }

  componentDidMount() {
    fetch(`https://abjj-wayfarer-api.herokuapp.com/city/`)
    .then((res) => res.json())
      .then((jsonData) => {
        this.setState({cities: jsonData})
      })
      .catch((err) => console.log(err))
  }

  render() {
    const options = []
      for (let city of this.state.cities) {
        options.push(<option value={city._id}>{city.name}</option>)
      }
    
  return (
    <div className="container">
      <h2>Create a new Post</h2>
      <form action="https://abjj-wayfarer-api.herokuapp.com/city/">
        <select name="city-menu" id="city-menu">
          {options}
        </select> <br/>
        <label htmlFor="title">Title</label> <br/>
        <input type="text" id="title" name="title"/> <br/>
        <label htmlFor="body">Body</label> <br/>
        <textarea name="body" id="body" cols="19" rows="5"></textarea>
        <br/>
        <button type="submit" >Submit</button>
      </form>

    </div>
  )}
}

export default NewPostForm;