export type CardRarity = 
  | 'Common' 
  | 'Rare' 
  | 'Epic' 
  | 'Mythic' 
  | 'Legendary' 
  | 'Chromatic' 
  | 'Exotic' 
  | 'Divine';

export interface Card {
  id: string;
  name: string;
  rarity: CardRarity;
  imageUrl?: string;
  description?: string;
}

export interface PackOpeningProps {
  cards: Card[];
  onClose: () => void;
}
