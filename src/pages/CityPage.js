import React from 'react';
// import image1 from '../images/london.jpg';
import CityShow from '../components/CityShow';
import CityList from '../components/CityList';
import ReactDOM from 'react-dom'
import DynamicForm from '../components/DynamicForm'

class CityPage extends React.Component {
  constructor() {
    super()
    this.closeForm = this.closeForm.bind(this)
  }
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

  updateCurrentCity = (city) => {
    this.setState({
      currentCity: city
    })
  }

  showForm = () => {
    ReactDOM.render(<DynamicForm closeForm={this.closeForm} currentCity={this.state.currentCity}/>, document.getElementById('modal-root'))
  }

  closeForm = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'))
  }

  render() {
    return (
      <>
        <div className="container-fluid cities">
            <CityShow 
              cities={this.state.cityData}
              currentCity={this.state.currentCity}
              updateCurrentCity={this.updateCurrentCity}
            />

        </div>
        <button onClick={this.showForm}>Add New Post</button>
        <div id="modal-root"></div>

      </>

    )
  }
}

export default CityPage;