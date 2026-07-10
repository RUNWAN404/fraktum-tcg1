import React, { useState, useEffect } from 'react';
import './pack-opening.css';
import { PackOpeningProps } from './types';
import { BoosterPack } from './BoosterPack';
import { RevealCard } from './RevealCard';

export const PackOpeningModal: React.FC<PackOpeningProps> = ({ cards, onClose }) => {
  const [phase, setPhase] = useState<'pack' | 'cards' | 'summary'>('pack');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shakeClass, setShakeClass] = useState('');
  const [isDivineDarkened, setIsDivineDarkened] = useState(false);

  // Очистка тряски
  useEffect(() => {
    if (shakeClass) {
      const timer = setTimeout(() => setShakeClass(''), 1000);
      return () => clearTimeout(timer);
    }
  }, [shakeClass]);

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setPhase('summary');
    }
  };

  return (
    <div className={`pack-modal-overlay ${shakeClass} ${isDivineDarkened ? 'darken-divine' : ''}`}>
      
      {phase === 'pack' && (
        <BoosterPack onOpenComplete={() => setPhase('cards')} />
      )}

      {phase === 'cards' && (
        <>
          <RevealCard 
            card={cards[currentCardIndex]} 
            onScreenShake={setShakeClass}
            onDivineDarken={setIsDivineDarkened}
          />
          <div className="controls">
            <button className="fraktum-btn" onClick={handleNextCard}>
              {currentCardIndex < cards.length - 1 ? 'Next Card >>' : 'Finish'}
            </button>
          </div>
        </>
      )}

      {phase === 'summary' && (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#ff8c00', fontSize: '32px', marginBottom: '20px' }}>PACK OPENED</h2>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '40px' }}>
            {cards.map((c, i) => (
              <div key={i} style={{ width: '80px', height: '120px', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#888' }}>
                {c.rarity}
              </div>
            ))}
          </div>
          <button className="fraktum-btn" onClick={onClose}>Return to Market</button>
        </div>
      )}

    </div>
  );
};
