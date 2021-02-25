import React from 'react';
// import image1 from '../images/london.jpg';
import CityShow from '../components/CityShow';
import ReactDOM from 'react-dom'
import DynamicForm from '../components/DynamicForm'

class CityPage extends React.Component {
  constructor() {
    super()
    this.closeForm = this.closeForm.bind(this)
    this.state = {
      cityData: [],
      currentCity: {},
    }
  }


  componentDidMount() {
    fetch('https://abjj-wayfarer-api.herokuapp.com/cities/')
    .then((res) => res.json())
    .then((jsonData) => {
      console.log('CIty Page JSON: ', jsonData[0])
      this.setState({
        cityData: jsonData,
        currentCity: jsonData[0]
      })
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
    console.log('CityPage CityPage', this.state.currentCity)
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