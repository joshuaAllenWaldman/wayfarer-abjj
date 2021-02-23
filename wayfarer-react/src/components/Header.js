import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
            <h4>Wayfare Logo</h4>
        </div>
        <div className="col-6">
          <nav className="nav justify-content-end">
            <Link to="">Sign in</Link>{' '}
            <Link to="">Sign up</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;