Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
    return this;
};

Date.prototype.iso = function () {
    const year = this.getFullYear();
    const month = (this.getMonth() + 1 < 10) ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1);
    const day = (this.getDate() < 10) ? '0' + this.getDate() : this.getDate();

    return `${year}-${month}-${day}`;
}

Date.prototype.dayOfYear = function () {
    const oneDay = 1000 * 60 * 60 * 24;
    const start = Date.UTC(this.getFullYear(), 0, 1);
    const diff = Date.UTC(this.getFullYear(), this.getMonth(),this.getDate()) - start;
    return Math.floor(diff / oneDay);
}