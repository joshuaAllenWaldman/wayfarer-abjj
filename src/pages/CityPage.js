import React from 'react';
import image1 from '../images/london.jpg';
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
      <div className="container-fluid cities">
        <div className="col-6 col-md-4" id="cities-container">
          <span className="cities-card">Cities</span>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" id="city-container">
            <div className="row g-0" id="city-card">
              <div className="col-md-4">
                <img src={image1} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body" id="city-body">
                  <span className="city-title">London</span>
                </div>
              </div>
            </div>
          </div>

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

          <div className="col-md-8">
          <div className="container-fluid" id="cities">

          </div>

          <div className="container-fluid" id="city-post">
          <p>hi</p>
          </div>

        </div>


          </>
        </div>
      </div>    
    )
  }
}

export default CityPage;
