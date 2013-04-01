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
	var sum = 0;

	for(var i = 0; i < this.items.length; i++) {
		sum = sum + this.items[i].price;
	};
		
	return sum;
};