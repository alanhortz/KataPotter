describe("Basket", function() {
	var basket;
	var book1 = new Book(1,'Harry Potter tome 1',8);
	var book2 = new Book(2,'Harry Potter tome 2',8);
	var book3 = new Book(3,'Harry Potter tome 3',8);
	var book4 = new Book(4,'Harry Potter tome 4',8);
	var book5 = new Book(5,'Harry Potter tome 5',8);

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
		
 		beforeEach(function() {
  			basket.add(book1);
 		});		

 		it("should indicates that the number of items is 1", function () {
 			expect(basket.count()).toBe(1);
 		});

 		it("should indicates that the amount of the checkout is equal to the book price", function () {
 			expect(basket.checkout()).toBe(book1.price);
 		});
	});

	describe("when two identical book has been added", function () {

		beforeEach(function() {
			basket.add(book1);
			basket.add(book1);

		});

		it("should indicates that the number of items is 2", function() {
			expect(basket.count()).toBe(2);
		});

		it("should indicates that the amount of the checkout is simply equal to the sum of the prices", function() {
			expect(basket.checkout()).toBe(16);
		});

	});

	describe("when two different books added", function() {

		beforeEach(function() {
			basket.add(book1);
			basket.add(book2);
		});

		it("should indicates that a discount of 5% has been applied on the amount of the checkout", function() {
			expect(basket.checkout()).toBe(8 * 2 * 0.95);
		});
	});

	describe("when the five tome have been added",function() {

		beforeEach(function() {
			basket.add(book1);
			basket.add(book2);
			basket.add(book3);
			basket.add(book4);
			basket.add(book5);

		});

		it("should indicates that a huge discount of 25% has been applied on the amount of the checkout", function() {
			expect(basket.checkout()).toBe(8 * 5 * 0.75);
		});
	});

});