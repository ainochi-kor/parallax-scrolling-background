import Phaser, { Game } from 'phaser';
import GameScene from './scenes/GameScene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    parent: 'game-container',
    width: 640,
    height: 416,
  },
  backgroundColor: '#5c5b5b',
  scene: [GameScene],
};

export default new Game(gameConfig);
