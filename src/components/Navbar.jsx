import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/highscore">Highscore</NavLink>
      <NavLink to="/results">Results</NavLink>
      <NavLink to="/stats">Stats</NavLink>
    </nav>
  )
}

export default Navbar