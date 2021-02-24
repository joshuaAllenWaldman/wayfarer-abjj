import React from 'react';
import PostList from './PostList'
import CityList from './CityList';


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
              <h1>{
                this.props.currentCity.name
              }</h1>
            </div>
            <div className="city-pic">
              <img src="" alt=""/>
            </div>
          </div>
          <div className="post-container">
            <PostList postData={
              this.state.posts
            }/>
          </div>
        </div>

      </>

    )
  }


}

export default CityShow;
