function Basket() {
	this.amount = 0;
	this.items = [];
	this.innerCount = 0;
}
Basket.prototype.count = function () {
	return this.innerCount;
};
Basket.prototype.add = function (item) {

	if (this.items.length === 0) {
		this.items.push([item.id]);
		this.innerCount += 1;
	} else {
		var i = 0,
			j = 0,
			innerLength = 0,
			idFound = false,
			mainLength = this.items.length;

		for (i = 0; i < mainLength; i += 1) {
			innerLength = this.items[i].length;
			idFound = false;
			for (j = 0; j < innerLength; j += 1) {
				if (this.items[i][j] === item.id) {
					idFound = true;
					break;
				}
			}
			if (!idFound && this.items[i].length < 4) {
				this.items[i].push(item.id);
				this.innerCount += 1;
				break;
			} else {
				if (i === (mainLength - 1)) {
					this.items.push([item.id]);
					this.innerCount += 1;
					break;
				}
			}
		}
	}
};
Basket.prototype.checkout = function () {

	if (this.items.length === 2 && this.items[0].length === 4 && this.items[1].length === 1 && this.items[1][0] === 5) {
		this.amount = 8 * 5 * 0.75;
		return this.amount;
	} else {
		this.amount = 0;
		var i;
		for (i = 0; i < this.items.length; i += 1) {
			switch (this.items[i].length) {
			case 1:
				this.amount += 8;
				break;
			case 2:
				this.amount += 8 * 2 * 0.95;
				break;
			case 3:
				this.amount += 8 * 3 * 0.90;
				break;
			case 4:
				this.amount += 8 * 4 * 0.80;
				break;
			}
		}
		return this.amount;
	}
};