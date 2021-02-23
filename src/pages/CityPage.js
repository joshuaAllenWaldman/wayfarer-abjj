import React from 'react';
import CityList from '../components/CityList';
import CityShow from '../components/CityShow';
import NewPostPage from './NewPostPage'


class CityPage extends React.Component {
  state = {
    cityData: [],
    currentCity: ''
  }
  
  componentDidMount () {
    fetch('https://abjj-wayfarer-api.herokuapp.com/city/')
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData)
        this.setState({cityData: jsonData})
        this.setState({currentCity: this.state.cityData[0]})
        console.log(this.state.currentCity)
      })
      .catch((err) => console.log(err))
  }

  // updatesCurrentCity = () => {
  //   this.setState
  // }
  

  render () {
    return (
      <>
      <div className="row">
        <CityList cities={this.state.cityData} currentCity={this.state.currentCity}/>
        <CityShow cities={this.state.cityData} currentCity={this.state.currentCity} />
      </div>
        <NewPostPage currentCity={this.state.currentCity}/>

      </>
    )
  }
}

export default CityPage;