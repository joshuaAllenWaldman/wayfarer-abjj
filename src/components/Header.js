import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Wayfarer</h1>
      <nav>
        <Link to="">Sign in</Link>{' '}
        <Link to="">Sign up</Link>
      </nav>
    </header>
  )
}

export default Header;