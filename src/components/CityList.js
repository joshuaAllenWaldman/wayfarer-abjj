import { Link } from 'react-router-dom'
import CityListCard from './CityListCard';

const CityList = (props) => {
  const cities = props.cities.map((city) => {
    return (
      <Link to={'/cities'} onClick={() => {
        props.updateCurrentCity(city);
        props.updatePosts();
      }}>
        <CityListCard key={city._id} city={city} />

      </Link>
    )
  })
  return (
    <div className="col-6 col-md-4" id="cities-container">
      <span className="cities-card">Cities</span>
      {cities}

    </div>
  )
}

// key={city._id} onClick={()=>{
//   props.updateCurrentCity(city)
//   props.updatePosts();
//   }}

export default CityList;