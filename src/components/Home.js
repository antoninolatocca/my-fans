import React from 'react';
import RegisterForm from './RegisterForm';

const Home = () => {
  return (
    <div className='home d-flex'>
      <div className='left-column'>
        <h2>Benvenuto su My-Fans!</h2>
        <p>Questa è la piattaforma per sostenere i tuoi performer preferiti.</p>
        <p>Per iniziare, accedi o registrati per diventare un sostenitore e accedere ai contenuti esclusivi dei tuoi artisti preferiti.</p>
      </div>
      <div className='right-column'>
        <RegisterForm isHome={true}/>
      </div>
    </div>
  );
};

export default Home;