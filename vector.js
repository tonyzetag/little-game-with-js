function Vector (x, y) {
    this.x = x;
    this.y = y;
}

// Sumar vectores
Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y)
}

// Multiplicar vectores
Vector.prototype.times = function (factor) {
    return new Vector(this.x * factor, this.y * factor)
}