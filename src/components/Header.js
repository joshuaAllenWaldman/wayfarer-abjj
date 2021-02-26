import { Link } from 'react-router-dom'
import Wlogo from '../images/wayfarer-logo.png';

const Header = () => {
  return (
    <header>
        <div className="header">
            <div className="wayfare-logo">
              <Link to="/">
              <img src={Wlogo} alt="" id="wayfarer-logo"/>
              </Link>
            </div>
            <div className="nav">
              <Link to="/cities">Sign in</Link>{' '}
              <Link to="/cities">Sign up</Link>  
            </div>
        </div>
    </header>
  )
}

export default Header;