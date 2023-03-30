import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AccountSettingsTabs = () => {
  const location = useLocation();

  return (
    <div className="tabs">
      <Link
        className={location.pathname === `/settings` ? 'active' : ''}
        to={`/settings`}
      >
        Profile
      </Link>
      <Link
        className={location.pathname === `/settings/wallet` ? 'active' : ''}
        to={`/settings/wallet`}
      >
        Wallet
      </Link>
      <Link
        className={location.pathname === `/settings/membership` ? 'active' : ''}
        to={`/settings/membership`}
      >
        membership
      </Link>
    </div>
  );
};

export default AccountSettingsTabs;
