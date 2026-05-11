import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TopChoices.css';

import itunesImg from '../assets/images/Itunes gift card.png';
import pubgImg from '../assets/images/pubg uc.png';
import freefireImg from '../assets/images/FF diamond.png';
import valorantImg from '../assets/images/valo gift card.png';

const choices = [
  { id: 1, title: 'iTunes Giftcard', type: 'Giftcard', price: 'NRP 800.00', img: itunesImg },
  { id: 2, title: 'Pubg Uc', type: 'Giftcard', price: 'NRP 1200.00', img: pubgImg },
  { id: 3, title: 'FreeFire Diamond', type: 'Giftcard', price: 'NRP 600.00', img: freefireImg },
  { id: 4, title: 'Valorant Giftcard', type: 'Giftcard', price: 'NRP 2200.00', img: valorantImg },
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
              <img src={choice.img} alt={choice.title} className="choice-image" />
            </div>
            <div className="choice-details">
              <span className="choice-type">{choice.type}</span>
              <h3 className="choice-name">{choice.title}</h3>
              <span className="choice-price">{choice.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopChoices;
