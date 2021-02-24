import React from 'react';
import CityShow from '../components/CityShow';
import NewPostPage from './NewPostPage';


class CityPage extends React.Component {
  state = {
    cityData: [],
    currentCity: {},
    currentCityPosts: []
  }


  componentDidMount() {
    fetch('https://abjj-wayfarer-api.herokuapp.com/cities/')
    .then((res) => res.json())
    .then((jsonData) => {
      this.setState({cityData: jsonData})
      this.setState({currentCity: this.state.cityData[0]})
    }).catch((err) => console.log(err))
  }

  fetchCityPosts = (cityId) => {
    fetch(`https://abjj-wayfarer-api.herokuapp.com/post`).then((res) => res.json()).then((jsonData) => {
      this.setState({currentCityPosts: jsonData})
    }).catch((err) => console.log(err))
  }


  updateCurrentCity = (city) => {
    this.setState({
      currentCity: city
    }, () => {
      this.fetchCityPosts(city._id)
    })
  }


  render() {
    return (
      <>

        <div className="row">
          <CityShow cities={
              this.state.cityData
            }
            currentCity={
              this.state.currentCity
            }
            updateCurrentCity={
              this.updateCurrentCity
            }/>
        </div>
        <NewPostPage updateCurrentCity={
            this.updateCurrentCity
          }
          cities={
            this.state.cityData
          }
          currentCity={
            this.state.currentCity
          }/>

      </>
    )
  }
}

export default CityPage;
