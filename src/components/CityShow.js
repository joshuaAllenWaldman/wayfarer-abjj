import React from 'react';
import PostList from './PostList'
import CityList from './CityList';
import image1 from '../images/san-fran.jpg';


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

        <div className="container-fluid right-column">
          <div className="row city-content">

            <div className="col city-name">
              <p className="CityName">{this.props.currentCity.name}</p>
              <p className="CitySubtitle">CALIFORNIA</p>
            </div>

            <div className="col city-image">
              <img src={this.props.cities[0].image} id="main-city-image" alt=""/>
              <div className="create-button">
              <i className="fas fa-plus-circle" id="plusBtn"></i>
              </div>
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
