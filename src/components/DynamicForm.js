import React from 'react'

class DynamicForm extends React.Component {
    state = {
        cities: [],
        city: '603555c12b0cc300154fea34', //Hardcoded San Francisco as the default city value to stop my suffering
        title: '',
        body: '',
        new: true
    }

    componentDidMount() {
        if (this.props.edit) {
            this.setState({new: false})
            fetch(`https://abjj-wayfarer-api.herokuapp.com/post/${this.props.post}`)
            .then((res) => res.json())
            .then((jsonData) => {
                this.setState({city: jsonData.city})
                this.setState({title: jsonData.title})
                this.setState({body: jsonData.body})
            })
        }
        fetch(`https://abjj-wayfarer-api.herokuapp.com/cities/`)
            .then((res) => res.json())
            .then((jsonData) => {
                this.setState({cities: jsonData})
            })
            .catch((err) => console.log(err))
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const requestBody = {
            city: this.state.city,
            title: this.state.title,
            body: this.state.body
          }
        if (this.state.new) {
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
              .then(this.props.updatePosts) 
              .catch((err) => {throw err})
              .then(this.props.closeForm)
            } else {
            requestBody._id = this.props.post
            fetch('https://abjj-wayfarer-api.herokuapp.com/post/', {
                method: 'put',
                //enctype: 'multipart/form-data',
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
            .then(this.props.updatePosts) 
            .catch((err) => {throw err})
            .then(this.props.closeForm)
        }
    }

    render() {
        const options = []
        for (let city of this.state.cities) {
          options.push(<option value={city._id}>{city.name}</option>)
        }
        if (this.state.new) {
            return(
                <div className="mymodal">
                <div className="mymodalcontent">
                    <h3>Create a New Post</h3>
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
                        <button onClick={this.props.closeForm}>Close</button>

                    </form>
                </div></div>
            )
        } else {
            return(
                <div className="mymodal">
                <div className="mymodalcontent">
                    <h3>Edit a Post</h3>
                    <form onSubmit={this.handleSubmit}>
                    {/* Changing the city of an existing post not yet supported */}
                    {/* <select name="city" id="city"  onChange={this.handleChange}>
                        <option value={this.props.city._id}>{this.props.city.name}</option>
                        {options}
                    </select> <br/> */}
                    <label htmlFor="title">Title</label> <br/>
                    <input onChange={this.handleChange} type="text" id="title" name="title" value={this.state.title}/> <br/>
                    <label htmlFor="body">Body</label> <br/>
                    <textarea onChange={this.handleChange} name="body" id="body" cols="19" rows="5" value={this.state.body}></textarea>
                    <br/>
                    <button type="submit" >Submit</button>
                    <button onClick={this.props.closeForm}>Close</button>
      </form>
                </div></div>
            )
        }
    }
}
export default DynamicForm