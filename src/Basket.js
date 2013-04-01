function Basket() {
	this.amount = 0;
	this.items = [];
}
Basket.prototype.count = function () {
	return this.items.length;
};
Basket.prototype.add = function (item) {
	this.items.push(item);
};
Basket.prototype.checkout = function () {
	if (this.items.length === 0) {
		return 0;
	} 
	else {
		return this.items[0].price;
	}
};