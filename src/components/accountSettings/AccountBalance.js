import React from 'react';

const AccountBalance = () => {

    const ammount = "€ 0,00";
    const redeemable = false;

  return (
    <div className='account-balance-container'>
        <p>You current balance</p>
        <p className='balance-counter'>{ammount}</p>
        <button className='dark-button'>Ricarica</button>
        <button className='dark-button' disabled={!redeemable}>Ritira</button>
    </div>
  );
};

export default AccountBalance;
