function point(x, y) {
    this.x = x;
    this.y = y;
}
    
point.prototype.toString= function() {
    return this.x+ ', ' +this.y;
};




