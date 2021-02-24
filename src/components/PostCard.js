
const PostCard = (props) => {
  return (
    <div className="card">
      <div className="title">
        <h4> {props.postData.title} </h4>
      </div>
      <div className="body">
        <p> {props.postData.body} </p>
      </div>
    </div>
  )
}

export default PostCard;