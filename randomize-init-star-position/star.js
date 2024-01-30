var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('star', 'assets/star.png'); // 星の画像パスを指定
}

function create() {
    this.starPatterns = [
        [{ x: 50, y: 0 }, { x: 150, y: 100 }, { x: 250, y: 0 }, /* ... */],
        [{ x: 70, y: 100 }, { x: 190, y: 0 }, { x: 310, y: 0 }, /* ... */],
        // 他のパターンを追加...
    ];

    this.stars = this.physics.add.group();

    let selectedPattern = Phaser.Utils.Array.GetRandom(this.starPatterns);

    selectedPattern.forEach(pos => {
        let star = this.stars.create(pos.x, pos.y, 'star');
        star.setVelocityY(100); // 星の速度を調整
    });
}

function update() {
    // ゲームのアップデートロジックをここに追加
}