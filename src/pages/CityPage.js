import React from 'react';
import CityList from '../components/CityList';
import CityShow from '../components/CityShow';
import NewPostPage from './NewPostPage';
import Header from '../components/Header';

class CityPage extends React.Component {
  state = {
    cityData: [],
    currentCity: ''
  }
  
  componentDidMount () {
    fetch('https://abjj-wayfarer-api.herokuapp.com/city/')
      .then((res) => res.json())
      .then((jsonData) => {
        this.setState({cityData: jsonData})
        this.setState({currentCity: this.state.cityData[0]})
      })
      .catch((err) => console.log(err))
  }
  

  updateCurrentCity = (city) => {
    this.setState({currentCity: city})
    // console.log(this.state.currentCity)
  }

  fetchCityPosts = (cityId) => {
    fetch(`https://abjj-wayfarer-api.herokuapp.com/city/${cityId}/posts`)
      .then((res) => res.json())
      .then((jsonData) => {
        // console.log(jsonData)
      })
      .catch((err) => console.log(err))
  }
  

  render () {
    return (
      <>

      <div className="row">
        <CityList cities={this.state.cityData} currentCity={this.state.currentCity} updateCurrentCity={this.updateCurrentCity} />
        <CityShow  currentCity={this.state.currentCity} />
      </div>
        <NewPostPage currentCity={this.state.currentCity}/>

      </>
    )
  }
}

export default CityPage;