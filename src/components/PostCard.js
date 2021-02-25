import React from 'react'
import DynamicForm from './DynamicForm'
import ReactDOM from 'react-dom'
class PostCard extends React.Component {
  constructor() {
    super()
    this.closeForm = this.closeForm.bind(this)
  }
  closeForm = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'))
  }
  launchEdit = () => {
    ReactDOM.render(<DynamicForm closeForm={this.closeForm} edit={true} post={this.props.postData._id}/>, document.getElementById('modal-root'))
  }
  truncate = (str) => {
    return str.length > 1000 ? str.substring(0, 997) + '...' : str
  }
  render() {
  return (
    <div className="card">
      <div className="title">
        <h4> {this.props.postData.title} </h4>
      </div>
      <div className="body">
        <p> {this.truncate(this.props.postData.body)} </p>
      </div>
      <button onClick={this.launchEdit}>Edit</button>
      <button onClick={() => {this.props.deletePost(this.props.postData._id, this.props.postData.city)}}>Delete!</button>
    </div>
  )}
}

export default PostCard;