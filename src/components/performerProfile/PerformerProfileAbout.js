import React from 'react';

const PerformerProfileAbout = ({ performer = {
  name: 'Antonino Latocca',
  country: 'Italy',
  website: 'http://antoninolatocca.com/',
  followers: 0
} }) => {
  return (
    <div className="performer-info-container">
      <div className="performer-info-details">
        <h2>About {performer.name}</h2>
        <br/>
        <p>Location: {performer.country}</p>
        {performer.website && <p>Website: {performer.website}</p>}
        <p>Followers: {performer.followers}</p>
      </div>
      <div className="performer-info-presentation">
          <p>Ciao, mi chiamo Antonino, sono l'ideatore di questo sito.</p>
          <p>Sono uno sviluppatore web e content creator.</p>
          <p>Più di 10 anni fa ho aperto il mio primo canale su Youtube, dove parlavo di programmazione, informatica; poi ho aggiunto anche altri tipi di contenuti come video di viaggi. I contenuti che sul mio canale ricevono più visualizzazione sono quelli inerenti le carte di credito e gli acquisti online.</p>
          <p>Ho pubblicato alcuni libri: soprattutto manuali. Uno si intitola <em>Pronti in sella</em> ed è un manuale di equitazione, forse effettivamente anche un po' troppo tecnico. Poi ho pubblicato <em>Sviluppare pagine per il web</em> che è un amnuale di sviluppo con HTML, CSS e Bootstrap.</p>
          <p>Negli anni ho pubblicato anche diversi articoli per vari blog che ho aperto.</p>
          <p>Una delle mie principali passioni è viaggiare e scoprire nuovi luoghi, imparare nuove cose, aprire la mia mente.</p>
      </div>
    </div>
  );
};

export default PerformerProfileAbout;
