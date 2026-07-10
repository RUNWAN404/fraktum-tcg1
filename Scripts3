import React, { useState } from 'react';

interface BoosterPackProps {
  onOpenComplete: () => void;
}

export const BoosterPack: React.FC<BoosterPackProps> = ({ onOpenComplete }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Длительность burst-light анимации 1.5s
    setTimeout(() => {
      onOpenComplete();
    }, 1500);
  };

  return (
    <div className={`booster-pack-scene ${isOpening ? 'opening' : ''}`} onClick={handleOpen}>
      <div className="pack-body">
        <div className="pack-lines"></div>
        <div className="pack-design">
          <div className="pack-logo">FRAKTUM</div>
          <div style={{ color: '#aaa', fontSize: '12px', letterSpacing: '2px' }}>CORE SET V1</div>
        </div>
        <div className="pack-foil-overlay"></div>
      </div>
      <div className="pack-top-strip">
        <span style={{ color: '#ff8c00', fontSize: '10px', opacity: 0.5 }}>TEAR HERE</span>
      </div>
    </div>
  );
};
