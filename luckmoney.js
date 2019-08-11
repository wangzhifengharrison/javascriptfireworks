function luckmoney(x,y) {
    this.x = x;
    this.y = y;
    this.display = function (x,y) {
        fill("yellow");
        ellipse(x, y, 50, 50);
    }
}