import React from 'react'

class PostCard extends React.Component {

  render() {
  return (
    <div className="card">
      <div className="title">
        <h4> {this.props.postData.title} </h4>
      </div>
      <div className="body">
        <p> {this.props.postData.body} </p>
      </div>
      <button onClick={() => {this.props.deletePost(this.props.postData._id)}}>Delete!</button>
    </div>
  )}
}

export default PostCard;