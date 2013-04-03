function Basket() {
	this.amount = 0;
	this.items = [];
	this.innerCount = 0;
}
Basket.prototype.count = function () {
	return this.innerCount;
};
Basket.prototype.add = function (item) {
	if(this.items.length === 0) {
		this.items.push([item.id]);
		this.innerCount++;
	} else {
		var mainLength = this.items.length;


		for (var i = 0; i < mainLength; i++) {
			
			var innerLength = this.items[i].length;
			for (var j = 0; j < innerLength; j++) {
				if(this.items[i][j] !== item.id && this.items[i][j].length < 5) {
					this.items[i][j].push(item.id);
					this.innerCount++;
				} else {
					this.items.push([item.id]);
					this.innerCount++;
					break;
				}
				
			};
		};
	}
};
Basket.prototype.checkout = function () {
	

	if(this.items.length === 5) {
		if(this.items[0][0].length === 1 && this.items[1][0].length === 1 && this.items[2][0].length === 1 && this.items[3][0].length === 1 && this.items[4][0].length === 1) {
			this.amount = 8 * 5 * 0.75

			return this.amount;
		}
	} else {
		this.amount = 0;

		for (var i = 0; i < this.items.length; i++) {
			switch(this.items[i].length) {
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
		};

		return this.amount;
	}
};