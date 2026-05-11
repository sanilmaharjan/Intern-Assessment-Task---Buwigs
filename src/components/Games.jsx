import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Games.css';

import spidermanImg from '../assets/images/spiderman.png';
import sekiroImg from '../assets/images/sekiro.png';
import godOfWarImg from '../assets/images/god of war.png';
import tekkenImg from '../assets/images/tekken 8.png';

const games = [
  { id: 1, img: spidermanImg, alt: 'Spiderman Miles Morales' },
  { id: 2, img: sekiroImg, alt: 'Sekiro Shadow Die Twice' },
  { id: 3, img: godOfWarImg, alt: 'God of War Ragnarok' },
  { id: 4, img: tekkenImg, alt: 'Tekken 8' },
];

const Games = () => {
  return (
    <section className="games-container">
      <div className="games-header">
        <h2 className="games-title">Games</h2>
        <div className="games-controls">
          <button className="control-btn"><ChevronLeft size={32} /></button>
          <button className="control-btn"><ChevronRight size={32} /></button>
        </div>
      </div>
      
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-image-container">
              <img src={game.img} alt={game.alt} className="game-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
