import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_scallop.svg';
import Store from '../../store';

const AppLogo = () => {
  const { chain } = useContext(Store);
  return (
    <div>
      <Link to={`/${chain.value}`} className="d-inline-block">
        <img src={logo} alt="Scallopscan" width="135" height="auto" />
      </Link>
    </div>
  );
};

export default AppLogo;
