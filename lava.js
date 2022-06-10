function Lava (initialPosition, characterType) {
    this.position = initialPosition;
    this.size = new Vector(1, 1);

    if (characterType === '=') this.speed = new Vector(2, 0);
    else if (characterType === '|') this.speed = new Vector(0, 2);
    else if (characterType === 'v') {
        this.speed = new Vector(0, 3);
        this.respawnPosition = initialPosition;
    }
}

Lava.prototype.type = 'lava'

Lava.prototype.act = function (step, level) {
    let newPostition = this.position.plus(this.speed.times(step));
    if (!level.obstacleAt(newPostition, this.size)) this.position = newPostition;
    else if (this.respawnPosition) this.position = this.respawnPosition;
    else this.speed = this.speed.times(-1);
}