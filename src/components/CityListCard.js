import image1 from '../images/london.jpg';

const CityListCard = (props) => {
  console.log(props)
  return (
    <div className="card mb-3" id="city-container">
        <div className="row g-0" id="city-card">
          <div className="col-md-4">
            <img src={image1} alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body" id="city-body">
              <span className="city-title">{props.city.name}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CityListCard