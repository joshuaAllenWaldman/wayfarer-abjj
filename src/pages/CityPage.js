import React from 'react';
import CityList from '../components/CityList'

class CityPage extends React.Component {
  state = {
    cityData: [],
  }
  
  componentDidMount () {
    fetch('https://abjj-wayfarer-api.herokuapp.com/city/')
      .then((res) => res.json())
      .then((jsonData) => {
        this.setState({cityData: jsonData})
      })
      .catch((err) => console.log(err))
  }


  render () {
    return (
      <div className="row">
        <CityList cities={this.state.cityData} />
        <div className="city-show col">

          <div className="city-header row">
            <div className="city-title">
              <h1>CityName</h1>
              <h2>Country</h2>  
            </div>
            <div className="city-pic">
              <img src="" alt=""/>
            </div>
          </div>

          <div className="post-container">
            <h2>Posts</h2>
            <ul>
              <li>POST</li>
              <li>POST</li>
            </ul>
          </div>
        </div>

    </div>
    )
  }
}

export default CityPage;