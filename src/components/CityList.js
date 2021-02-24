import { Link } from 'react-router-dom'

const CityList = (props) => {
  const cities = props.cities.map((city) => {

    return <li key={city._id} onClick={()=>{
      props.updateCurrentCity(city)
      props.updatePosts();
      }}
    
    ><Link to={'/cities'}> {city.name} </Link></li>
  })
  return (
    <div className="cities-list col">
          <h1>Cities</h1>
          <ul>
            { cities }
          </ul>
        </div>
  )
}

export default CityList;