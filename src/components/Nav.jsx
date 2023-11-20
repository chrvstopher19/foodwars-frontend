import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </nav>
  )
}

export default Nav