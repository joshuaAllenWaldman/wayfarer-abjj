import React from 'react';
import image1 from '../images/london.jpg';
import CityShow from '../components/CityShow';
import NewPostForm from '../components/NewPostForm';
import CityList from '../components/CityList';
import EditPostForm from '../components/EditPostForm';


class CityPage extends React.Component {
  state = {
    cityData: [],
    currentCity: {},
    currentCityPosts: [],
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

  showForm = (event) => {
    const form = document.getElementById('modal');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  };


  render() {
    return (
      <>
        <div className="container-fluid cities">
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

        <div id="modal">
          <NewPostForm 
            currentCity={this.state.currentCity} 
          />
        </div>
        <button onClick={this.showForm}>Add New Post</button>


      </>

    )
  }
}

export default CityPage;