
const PostCard = (props) => {
  let createTime = parseInt((new Date (props.postData.createdAt).getTime() /1000).toFixed(0))
  return (
    <div className="card">
      <div className="title">
        <h4> {props.postData.title} </h4>
      </div>
      <div className="body">
        <p> {props.postData.body} </p>
        <p>{createTime}</p>
      </div>
    </div>
  )
}

export default PostCard;