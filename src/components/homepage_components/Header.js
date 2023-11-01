import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LOGO_URL } from '../../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [userState, setUseState] = useState('Log In');

  return (
    <div className="header">
      <div className="logo-div">
        <Link to={'/'}>
          <img src={LOGO_URL} />
        </Link>
        <span>Adderess</span>
      </div>

      <ul className="nav-items">
        <li>
          <div className="li-items">
            <a href="https://www.example.com/" target="_blank">
              <span>Offers</span>
              <FontAwesomeIcon icon={faTag} />
            </a>
          </div>
        </li>
        <li>
          <div className="li-items">
            <Link to="/help">
              <span>Help</span>
              <FontAwesomeIcon icon={faQuestion} />
            </Link>
          </div>
        </li>
        <li>
          <div className="li-items">
            <Link to="/cart">
              <span>Cart</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </li>
        <li
          onClick={() => {
            userState == 'Log In'
              ? setUseState('Log Out')
              : setUseState('Log In');
          }}
        >
          <div className="li-items">
            <a href="https://www.example.com/" target="_blank">
              <span>{userState}</span>
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
