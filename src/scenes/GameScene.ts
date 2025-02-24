import Phaser from 'phaser';

const AssetKeys = {
  BACKGROUND: 'BACKGROUND',
  FOG: 'FOG',
  FOGEGROUND: 'FOGEGROUND',
  TREES: 'TREES',
};

class GameScene extends Phaser.Scene {
  private bg!: Phaser.GameObjects.TileSprite;
  private fog!: Phaser.GameObjects.TileSprite;
  private fogeround!: Phaser.GameObjects.TileSprite;
  private trees!: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: 'Game' });
  }

  preload(): void {
    this.load.image(AssetKeys.BACKGROUND, 'assets/images/background.png');
    this.load.image(AssetKeys.FOG, 'assets/images/fog.png');
    this.load.image(AssetKeys.FOGEGROUND, 'assets/images/foreground.png');
    this.load.image(AssetKeys.TREES, 'assets/images/trees.png');
  }

  create(): void {
    const { width, height } = this.scale;
    this.bg = this.add.tileSprite(0, 0, width, height, AssetKeys.BACKGROUND).setScale(2);
    this.trees = this.add.tileSprite(0, 0, width, height, AssetKeys.TREES).setScale(2);
    this.fogeround = this.add.tileSprite(0, 0, width, height, AssetKeys.FOGEGROUND).setScale(2);
    this.fog = this.add.tileSprite(0, 0, width, height, AssetKeys.FOG).setScale(2);
  }

  update(_time: number, delta: number): void {
    this.bg.tilePositionX += delta * 0.1;
    this.trees.tilePositionX += delta * 0.14;
    this.fogeround.tilePositionX += delta * 0.2;
    this.fog.tilePositionX += delta * 0.7;
  }
}

export default GameScene;
