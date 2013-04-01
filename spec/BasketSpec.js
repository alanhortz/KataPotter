describe("Basket", function() {
	var basket;

 	beforeEach(function() {
  		basket = new Basket();
 	});

	describe("when empty", function() {

		it("should indicates that the number of items is zero", function() {
			expect(basket.count()).toBe(0);
		});

		it("should indicates that the amount of the checkout is zero", function() {
			expect(basket.checkout()).toBe(0);
		});
	});

	describe("when a book has been added", function () {
		var book = new Book(1,'Harry Potter tome 1',8);

 		beforeEach(function() {
  			basket.add(book);
 		});		

 		it("should indicates that the number of items is 1", function () {
 			expect(basket.count()).toBe(1);
 		});

 		it("should indicates that the amount of the checkout is equal to the book price", function () {
 			expect(basket.checkout()).toBe(book.price);
 		});
	});

	describe("when two identical book has been added", function () {
		var book = new Book(1,'Harry Potter tome 1',8);

		beforeEach(function() {
			basket.add(book);
			basket.add(book);

		});

		it("should indicates that the number of items is 2", function() {
			expect(basket.count()).toBe(2);
		});

		it("should indicates that the amount of the checkout is simply equal to the sum of the prices", function() {
			expect(basket.checkout()).toBe(16);
		});

	});

});