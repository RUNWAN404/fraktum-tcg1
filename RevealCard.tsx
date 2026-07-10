import React, { useEffect, useState } from 'react';
import { Card } from './types';

interface RevealCardProps {
  card: Card;
  onScreenShake: (shakeClass: string) => void;
  onDivineDarken: (darken: boolean) => void;
}

export const RevealCard: React.FC<RevealCardProps> = ({ card, onScreenShake, onDivineDarken }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Сброс стейтов при смене карты
    setIsFlipped(false);
    onDivineDarken(false);
    
    // Настройки задержки (JS hooks)
    let delay = 0;
    let shakeType = '';

    switch (card.rarity) {
      case 'Epic': delay = 200; break;
      case 'Mythic': delay = 300; break;
      case 'Legendary': delay = 600; shakeType = 'shake-screen-light'; break;
      case 'Chromatic': delay = 800; break;
      case 'Exotic': delay = 1000; shakeType = 'shake-screen-strong'; break;
      case 'Divine': 
        delay = 1500; 
        shakeType = 'shake-screen-divine'; 
        onDivineDarken(true); // Темнеет экран
        break;
      default: delay = 0; break;
    }

    const timer = setTimeout(() => {
      setIsFlipped(true);
      if (shakeType) onScreenShake(shakeType);
    }, delay);

    return () => clearTimeout(timer);
  }, [card, onScreenShake, onDivineDarken]);

  // Выбор цвета рамки бейджа
  const getBadgeColor = () => {
    switch(card.rarity) {
      case 'Common': return '#888';
      case 'Rare': return '#0096ff';
      case 'Epic': return '#b400ff';
      case 'Mythic': return '#ff1432';
      case 'Legendary': return '#ffc800';
      case 'Chromatic': return '#00ffcc';
      case 'Exotic': return '#ff00ff';
      case 'Divine': return '#ffffff';
      default: return '#888';
    }
  };

  return (
    <div className={`card-scene rarity-${card.rarity}`}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-face card-back">
          <div className="card-back-logo">FRAKTUM</div>
        </div>
        <div 
          className="card-face card-front" 
          style={card.imageUrl ? { backgroundImage: `linear-gradient(to top, #000 0%, transparent 60%), url(${card.imageUrl})` } : { background: '#111' }}
        >
          <div className="card-header">{card.id}</div>
          <div className="card-title">{card.name}</div>
          <div>
            <span className="card-rarity-badge" style={{ borderColor: getBadgeColor(), color: getBadgeColor() }}>
              {card.rarity}
            </span>
            {card.description && <p style={{ fontSize: '12px', color: '#ccc', marginTop: '10px' }}>{card.description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
