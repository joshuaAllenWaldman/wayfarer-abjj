import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="header">
            <div className="wayfare-logo">
              <Link to="/"><h3>Wayfare Logo</h3></Link>
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