import React from 'react';
import PostList from './PostList'
import CityList from './CityList';
import EditPostForm from './EditPostForm';


class CityShow extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch(`https://abjj-wayfarer-api.herokuapp.com/posts`)
      .then((res) => res.json())
      .then((jsonData) => {
        const filteredPosts = jsonData.filter((post) => {
          return post.city === this.props.currentCity._id
        })
        this.setState({posts: filteredPosts})
    })
    .catch((err) => console.log(err))
  }

  updatePosts = () => {
    console.log('update hit')
    fetch(`https://abjj-wayfarer-api.herokuapp.com/posts`)
      .then((res) => res.json())
      .then((jsonData) => {
        const filteredPosts = jsonData.filter((post) => {
          return post.city === this.props.currentCity._id
        })
        this.setState({posts: filteredPosts})
    })
    .catch((err) => console.log(err))
  }

  deletePost = (postId, cityId) => {
    //FIlters out the deleted post from the post state. but it returns when you refresh the page cause there is no db call
    fetch('https://abjj-wayfarer-api.herokuapp.com/post/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id: postId, city: cityId})
    }).then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData)
        const filteredPosts = this.state.posts.filter((post) => {
        return postId !== post._id
        });
        this.setState({
          posts: filteredPosts
        }) 
      })
  }

  launchEditForm = (postId) => {
    

  }

  

  render() {
    return (
      <>
        <CityList cities={
            this.props.cities
          }
          currentCity={
            this.props.currentCity
          }
          updateCurrentCity={
            this.props.updateCurrentCity
          }
          updatePosts={this.updatePosts}

          />
        <div className="city-show col">
          <div className="city-header row">
            <div className="city-title">
              <h1>{this.props.currentCity.name}</h1>
            </div>
            <div className="city-pic">
              <img src="" alt=""/>
            </div>
          </div>
          <div className="post-container">
            <PostList 
            postData={this.state.posts}
            deletePost={this.deletePost}
            launchEditForm={this.launchEditForm}
            />
          </div>
        <EditPostForm
        cities={this.props.cities}  
        city={this.props.currentCity} 
        posts={this.state.posts} />
        </div>
      </>

    )
  }


}

export default CityShow;
