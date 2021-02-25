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
      <button onClick={this.destroyPost}>Delete!</button>
    </div>
  )}
}

export default PostCard;