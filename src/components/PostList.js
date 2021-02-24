import PostCard from './PostCard'

const PostList = (props) => {
  const posts = props.postData.map((post, index) => {
    return (
        <PostCard 
        postData={props.postData[index]} 
        key={props.postData[index]._id}

        /> 
    )
  })
  return (
    <>
      <h3>Posts</h3>

      {posts}

    </>
  )
}

export default PostList;