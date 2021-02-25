import React from 'react'

class DynamicForm extends React.Component {
    state = {
        title: '',
        body: '',
        city: '',
        currentCity: '',
        new: true
    }

    componentDidMount() {
        if (this.props.edit) {
            this.setState({new: false})
            fetch(`https://abjj-wayfarer-api.herokuapp.com/post/${this.props.post}`)
            .then((res) => res.json())
            .then((jsonData) => {
                this.setState({city: jsonData.city, title: jsonData.title, body: jsonData.body})
            })
            fetch(`https://abjj-wayfarer-api.herokuapp.com/city/${this.props.city}`)
                .then((res) => res.json())
                .then((jsonData) => {
                    this.setState({currentCity: jsonData})
                })
        } else {this.setState({currentCity: this.props.currentCity, city: this.props.currentCity._id})}
        
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

        if (this.state.new) {
            return(
                <div className="mymodal">
                <div className="mymodalcontent">
                    <h3>Create a New Post for {this.state.currentCity.name}</h3>
                    <form onSubmit={this.handleSubmit}>
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
                    <h3>Edit a Post on {this.state.currentCity.name}</h3>
                    <form onSubmit={this.handleSubmit}>
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