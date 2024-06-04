import './navbar.css';
import logo from './airbnb-logo.png';

export default function Navbar() {
  return (
    <nav>
      <img className='logo' src={logo} alt='airbnb logo.'/>
    </nav>
  );
}