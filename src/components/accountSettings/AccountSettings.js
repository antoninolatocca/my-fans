import React from 'react';
import './AccountSettings.css';
import { useLocation } from 'react-router-dom';
import AccountSettingsTabs from './AccountSettingsTab';
import AccountSettingsProfile from './AccountSettingsProfile';
import AccountSettingsWallet from './AccountSettingsWallet';
import AccountSettingsMembership from './AccountSettingsMembership';

function AccountSettings() {
    const location = useLocation();

    var activePanel = <></>;

    switch(location.pathname) {
        case `/settings/wallet`:
            activePanel = <AccountSettingsWallet />;
            break;
        case `/settings/membership`:
            activePanel = <AccountSettingsMembership />;
            break;
        default:
            activePanel = <AccountSettingsProfile />;
    }

    return (
        <div className="account-settings">
          <AccountSettingsTabs />
          <div className="performer-subpage-container">
            {activePanel}
          </div>
        </div>
      );

}

export default AccountSettings;