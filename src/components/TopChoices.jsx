import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TopChoices.css';

import itunesImg from '../assets/images/Itunes gift card.png';
import pubgImg from '../assets/images/pubg uc.png';
import freefireImg from '../assets/images/FF diamond.png';
import valorantImg from '../assets/images/valo gift card.png';

const choices = [
  { id: 1, img: itunesImg, alt: 'iTunes Giftcard' },
  { id: 2, img: pubgImg, alt: 'Pubg Uc' },
  { id: 3, img: freefireImg, alt: 'FreeFire Diamond' },
  { id: 4, img: valorantImg, alt: 'Valorant Giftcard' },
];

const TopChoices = () => {
  return (
    <section className="top-choices-container">
      <div className="top-choices-header">
        <h2 className="top-choices-title">Top choices</h2>
        <div className="top-choices-controls">
          <button className="control-btn"><ChevronLeft size={32} /></button>
          <button className="control-btn"><ChevronRight size={32} /></button>
        </div>
      </div>
      
      <div className="top-choices-grid">
        {choices.map(choice => (
          <div key={choice.id} className="choice-card">
            <div className="choice-image-container">
              <img src={choice.img} alt={choice.alt} className="choice-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopChoices;
