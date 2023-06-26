import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  // console.log('this is setUser in Nav', setUser)
  function handleLogOut() {
    // delete the token from storage
    userService.logOut()
    // set the user to null
    setUser(null)
  }

  return (
    <nav>
      <h1>alPal</h1>
      <h4>With Alex by you side, adventures collide, and laughter becomes your joyful guide!</h4>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}