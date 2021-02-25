import PostCard from './PostCard'

function dateSort(a, b) {
  return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
}

const PostList = (props) => {
  const sortedPosts = props.postData.sort(dateSort)
  const posts = sortedPosts.map((post, index) => {
    let createTime = parseInt((new Date (post.createdAt).getTime() /1000).toFixed(0))
    return (
        <PostCard 
        postData={props.postData[index]} 
        key={props.postData[index]._id}
        deletePost={props.deletePost}

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