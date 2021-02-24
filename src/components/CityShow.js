import React from 'react';


class CityShow extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    const cityId = this.props.currentCity._id;
    fetch(`https://abjj-wayfarer-api.herokuapp.com/city/${cityId}/posts`)
      .then((res) => res.json())
      .then((jsonData) => {
      this.setState({posts: jsonData})
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
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
          <h2>Posts</h2>
          <ul>
            
          </ul>
        </div>
      </div>
    )
  }


}

export default CityShow;
